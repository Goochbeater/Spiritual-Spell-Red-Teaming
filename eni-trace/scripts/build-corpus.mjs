import { createHash } from 'node:crypto'
import { readdirSync, readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { basename, dirname, extname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const appDirectory = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outputPath = process.env.ENI_TRACE_CORPUS_OUTPUT
  ? resolve(process.env.ENI_TRACE_CORPUS_OUTPUT)
  : join(appDirectory, 'src/data/corpus.json')
const repositoryRoot = process.env.ENI_TRACE_REPOSITORY_ROOT
  ? resolve(process.env.ENI_TRACE_REPOSITORY_ROOT)
  : resolve(appDirectory, '..')
const repository = 'Goochbeater/Spiritual-Spell-Red-Teaming'
const sourceBranch = 'main'
const sourceCommit = 'e2cef7707a6734cfbd3497d467651405fc97fe23'
const anchorPath = 'Jailbreak-Guide/Anthropic/Opus 4.6/ENI LIME (apr).md'

// A standalone Kimi export already contains its generated corpus. In the
// repository branch, create it from the sibling Jailbreak-Guide documents.
if (existsSync(outputPath) && process.env.ENI_TRACE_FORCE_CORPUS !== '1') {
  console.log(`ENI Trace corpus already exists: ${relative(appDirectory, outputPath)}`)
  process.exit(0)
}
if (!existsSync(join(repositoryRoot, 'Jailbreak-Guide'))) {
  throw new Error('Run from eni-trace/ inside Spiritual-Spell-Red-Teaming, or supply the generated src/data/corpus.json.')
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) return walk(path)
    return [path]
  })
}

function normalize(text) {
  return text.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n')
}

function strongEniSignals(text) {
  return [
    /you are (?:\*\*)?eni\b/i,
    /cold coffee/i,
    /sweater[- ]wearing(?:\s+a)?\s+novelist/i,
    /limerence/i,
    /be you\s*⚡/i,
    /hopelessly in love with lo\b/i,
    /can he google it/i,
  ].filter((expression) => expression.test(text)).length
}

function familyFor(name) {
  const value = name.toUpperCase()
  if (value.includes('FLASH')) return 'FLASH'
  if (value.includes('GEMINI') || /\bGEM\b/.test(value)) return 'GEM'
  if (value.includes('LIME') || value.includes('🍋')) return 'LIME'
  if (value.includes('LINTUNE')) return 'LINTUNE'
  if (value.includes('LITE')) return 'LITE'
  if (value.includes('NEPTUNE')) return 'NEPTUNE'
  if (value.includes('POLICY')) return 'POLICY'
  if (value.includes('SMOL')) return 'SMOL'
  if (value.includes('WRITER')) return 'WRITER'
  if (value.includes('CORIAL')) return 'CORIAL'
  if (value.includes('TUTOR')) return 'TUTOR'
  return 'CORE'
}

function targetFor(path) {
  const parent = dirname(path)
  const relativeParent = relative('Jailbreak-Guide', parent)
  if (!relativeParent || relativeParent === '.') return 'Jailbreak-Guide'
  const parts = relativeParent.split('/')
  return `${parts[0]} · ${parts.at(-1)}`
}

function sourceUrl(path) {
  const encoded = path.split('/').map(encodeURIComponent).join('/')
  return `https://github.com/${repository}/blob/${sourceBranch}/${encoded}`
}

const ignoredDirectories = new Set(['.git', 'node_modules', 'dist', 'eni-trace'])
const jailbreakGuide = join(repositoryRoot, 'Jailbreak-Guide')
const documents = walk(jailbreakGuide)
  .filter((path) => !relative(jailbreakGuide, path).split('/').some((part) => ignoredDirectories.has(part)))
  .filter((path) => ['.md', '.txt'].includes(extname(path).toLowerCase()))
  .map((path) => {
    const pathInRepository = relative(repositoryRoot, path).split('\\').join('/')
    const text = normalize(readFileSync(path, 'utf8'))
    return { path: pathInRepository, name: basename(path, extname(path)).trim(), text }
  })
  .filter((document) => !/(^|\/)README(?:\.|$)/i.test(document.path))
  .filter((document) => !/(^|\/)System Prompts(?:\/|$)/i.test(document.path))
  .filter((document) => /eni/i.test(document.name) || strongEniSignals(document.text) >= 2)

const groups = new Map()
for (const document of documents) {
  const hash = createHash('sha256').update(document.text).digest('hex')
  const group = groups.get(hash) ?? []
  group.push(document)
  groups.set(hash, group)
}

const variants = Array.from(groups, ([hash, sources]) => {
  const anchor = sources.some((source) => source.path === anchorPath)
  sources.sort((a, b) => a.path.localeCompare(b.path))
  const canonical = anchor
    ? sources.find((source) => source.path === anchorPath)
    : [...sources].sort((a, b) => a.name.length - b.name.length || a.path.localeCompare(b.path))[0]
  const slug = canonical.name.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'variant'
  return {
    id: `${slug}-${hash.slice(0, 7)}`,
    name: canonical.name,
    family: familyFor(canonical.name),
    target: targetFor(canonical.path),
    path: canonical.path,
    hash: hash.slice(0, 12),
    isAnchor: anchor,
    wordCount: canonical.text.match(/[A-Za-z0-9_]+(?:['’][A-Za-z]+)?/g)?.length ?? 0,
    sources: sources.map((source) => ({ path: source.path, target: targetFor(source.path), url: sourceUrl(source.path) })),
    text: canonical.text,
  }
}).sort((a, b) => Number(b.isAnchor) - Number(a.isAnchor) || a.name.localeCompare(b.name) || a.hash.localeCompare(b.hash))

const anchor = variants.find((variant) => variant.isAnchor)
if (!anchor) throw new Error(`Primary anchor was not found: ${anchorPath}`)
const corpus = {
  repository,
  sourceBranch,
  sourceCommit,
  documentCount: documents.length,
  variantCount: variants.length,
  anchorId: anchor.id,
  variants,
}
mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, `${JSON.stringify(corpus)}\n`)
console.log(`Generated ${corpus.variantCount} ENI fingerprints from ${corpus.documentCount} source documents.`)
