/** @type {import('next').NextConfig} */

const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL || 'http://localhost:3000'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath,
  images: {
    unoptimized: true, // Image Optimization is not compatible with `next export`
  },
  env: {
    baseUrl: HOST_URL + basePath,
    GTAG_TRACKING_ID: process.env.NEXT_GTAG_TRACKING_ID,
  },
}

module.exports = nextConfig
