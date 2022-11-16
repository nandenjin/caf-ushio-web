/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath,
  images: {
    unoptimized: true, // Image Optimization is not compatible with `next export`
  },
}

module.exports = nextConfig
