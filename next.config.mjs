import nextMDX from '@next/mdx'
import rehypeSlug from 'rehype-slug'
import rehypeSanitize from 'rehype-sanitize'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeSlug, rehypeSanitize],
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})