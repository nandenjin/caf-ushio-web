/** @type {import('next').NextConfig} */

const withExportImages = require('next-export-optimize-images')

// Note: basePath is also read at export-images.config.js
const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL || 'http://localhost:3000'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = withExportImages({
  reactStrictMode: true,
  swcMinify: true,
  basePath,
  env: {
    baseUrl: HOST_URL + basePath,
    GTAG_TRACKING_ID: process.env.NEXT_GTAG_TRACKING_ID,
  },
})

module.exports = nextConfig
