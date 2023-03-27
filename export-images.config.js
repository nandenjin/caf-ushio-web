const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  basePath,
  convertFormat: [['jpg', 'webp']],
}

module.exports = config
