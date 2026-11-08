import 'dotenv/config'
import { readFileSync } from 'node:fs'
import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { handleEnhancedRequest } from '../netlify/functions/lib/enhanced.mjs'

const app = new Hono()

// The preview server and Netlify function deliberately share the same handler.
app.all('/api/enhanced', (context) => handleEnhancedRequest(context.req.raw, process.env))
app.use('*', serveStatic({ root: './dist' }))
app.notFound((context) => {
  if (!(context.req.header('accept') || '').includes('text/html')) {
    return context.json({ code: 'not_found', message: 'Not found.' }, 404)
  }
  return context.html(readFileSync('./dist/index.html', 'utf8'))
})
app.onError((error, context) => {
  console.error('Request failed:', error instanceof Error ? error.message : String(error))
  return context.json({ code: 'internal_error', message: 'The request could not be completed.' }, 500)
})

const port = Number(process.env.PORT || 3000)
serve({ fetch: app.fetch, port, hostname: '0.0.0.0' }, () => {
  console.log(`ENI Trace listening on http://0.0.0.0:${port}`)
})
