import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    // Gamle langsholt.com-stier → nærmeste ekvivalent, klare for den
    // dagen langsholt.com pekes hit som domene-alias (301-plan i S4).
    return [
      { source: '/snorydding', destination: '/tjenester/snobroyting', permanent: true },
      { source: '/stroing-iskontroll', destination: '/tjenester/stroing-og-salting', permanent: true },
      { source: '/takrydding', destination: '/tjenester/takrydding', permanent: true },
      { source: '/vintervedlikehold-bedrift', destination: '/tjenester/vintervedlikehold-bedrift', permanent: true },
      { source: '/vintervedlikehold-privat', destination: '/tjenester/snobroyting', permanent: true },
      { source: '/blank-2', destination: '/blogg', permanent: true },
      { source: '/blog', destination: '/blogg', permanent: true },
      { source: '/post/:slug*', destination: '/blogg', permanent: true },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
