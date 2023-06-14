/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
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

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
