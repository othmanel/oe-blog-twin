import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import { ReactElement } from 'react'
import { Callout } from '@/components/mdx/callout'

const rootDirectory = path.join(process.cwd(), 'content')

const components = {
  Callout
}

export interface Post {
  title: string
  slug: string
  date: string
  excerpt: string
  category: string
  type?: 'post' | 'page'
  author: {
    name: string
    role: string
  }
  content: ReactElement
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(rootDirectory, 'posts', `${slug}.mdx`)
    const source = fs.readFileSync(filePath, 'utf-8')
    
    const { data, content } = matter(source)
    const { content: compiledContent } = await compileMDX({
      source: content,
      options: { 
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            [rehypePrettyCode, {
              keepBackground: true,
              theme: 'github-dark',
              getHighlighter: () => {
                return import('shiki').then(async ({ getSingletonHighlighter }) => {
                  const highlighter = await getSingletonHighlighter()
                  await highlighter.loadTheme('github-dark')
                  return highlighter
                })
              }
            }]
          ]
        }
      },
      components
    })

    return {
      title: data.title,
      slug,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      type: data.type || 'post',
      author: data.author,
      content: compiledContent
    }
  } catch (error) {
    console.error('Error in getPost:', error)
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const postsDirectory = path.join(rootDirectory, 'posts')
  const files = fs.readdirSync(postsDirectory)
  const mdxFiles = files.filter(file => file.endsWith('.mdx'))

  const posts = await Promise.all(
    mdxFiles.map(async file => {
      const slug = file.replace('.mdx', '')
      const post = await getPost(slug)
      return post
    })
  )

  return posts
    .filter((post): post is Post => post !== null)
    .filter(post => post.type !== 'page')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
} 