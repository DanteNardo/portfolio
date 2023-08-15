const createMDX = require('@next/mdx')
const { remarkCodeHike } = require('@code-hike/mdx')

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

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [
      [remarkCodeHike, { theme: 'github-dark', lineNumbers: false }],
    ],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX(nextConfig);
