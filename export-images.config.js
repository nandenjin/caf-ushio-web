const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  basePath,
}

module.exports = config
