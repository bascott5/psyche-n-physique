import nextMDX from '@next/mdx'
import rehypeSlug from 'rehype-slug'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeSlug],
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})