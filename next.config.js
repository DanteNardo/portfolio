/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/skills',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
