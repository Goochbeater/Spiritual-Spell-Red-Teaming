import { handleEnhancedRequest } from './lib/enhanced.mjs'

// Netlify Functions v2 uses the platform Request/Response objects directly.
// The OpenRouter credential is read only from the server runtime.
export default async function enhancedReport(request) {
  return handleEnhancedRequest(request, process.env)
}

export const config = {
  path: '/api/enhanced',
}
