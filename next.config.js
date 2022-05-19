/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['images.microcms-assets.io'],
  },
}

module.exports = nextConfig
