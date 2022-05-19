/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['images.microcms-assets.io'],
  },
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig
