module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['reqres.in', 'via.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
  },
}