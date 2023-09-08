const createMDX = require('@next/mdx')
// const { remarkCodeHike } = require('@code-hike/mdx')
const rehypePrettyCode = require('rehype-pretty-code')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // mdxRs: true,
    // serverComponentsExternalPackages: ['shiki', 'vscode-oniguruma'],
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

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: 'material-theme-ocean',
}

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX(nextConfig)
