import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const PUBLIC_DIR = path.join(process.cwd(), 'public')
const MAX_WIDTH = 2400
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp'])

const SKIP_FILES = new Set(['favicon.ico', 'logo.webp'])

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)))
      continue
    }
    files.push(fullPath)
  }

  return files
}

function formatBytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!IMAGE_EXTENSIONS.has(ext)) return null

  const fileName = path.basename(filePath)
  if (SKIP_FILES.has(fileName)) return null

  const original = await fs.readFile(filePath)
  const image = sharp(original, { failOn: 'none' })
  const metadata = await image.metadata()

  if (!metadata.width || !metadata.height) return null

  let pipeline = sharp(original, { failOn: 'none' })

  if (metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
      fit: 'inside',
    })
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true })
  } else if (ext === '.png') {
    pipeline = pipeline.png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      palette: metadata.width <= 512,
    })
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: 82 })
  }

  const optimized = await pipeline.toBuffer()
  if (optimized.length >= original.length) {
    return {
      filePath,
      skipped: true,
      before: original.length,
      after: original.length,
    }
  }

  await fs.writeFile(filePath, optimized)

  return {
    filePath,
    skipped: false,
    before: original.length,
    after: optimized.length,
    width: metadata.width,
    height: metadata.height,
  }
}

async function main() {
  const files = await walk(PUBLIC_DIR)
  const results = []

  for (const filePath of files) {
    const result = await optimizeImage(filePath)
    if (result) results.push(result)
  }

  const optimized = results.filter((result) => !result.skipped)
  const savedBytes = optimized.reduce(
    (total, result) => total + (result.before - result.after),
    0
  )

  console.log(`Processed ${results.length} images`)
  console.log(`Optimized ${optimized.length} images`)
  console.log(`Saved ${formatBytes(savedBytes)} total`)

  optimized
    .sort((a, b) => b.before - b.after - (a.before - a.after))
    .slice(0, 15)
    .forEach((result) => {
      const relativePath = path.relative(PUBLIC_DIR, result.filePath)
      console.log(
        `- ${relativePath}: ${formatBytes(result.before)} -> ${formatBytes(result.after)}`
      )
    })
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
