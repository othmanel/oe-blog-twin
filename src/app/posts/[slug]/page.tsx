import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { getPost, getAllPosts } from "@/lib/mdx"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PageProps) {
  const resolvedParams = await params
  const post = await getPost(resolvedParams.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="container py-8 max-w-3xl">
        <div className="space-y-2 mb-8">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="font-mono text-sm">
              {post.category}
            </Badge>
            <span className="text-sm text-muted-foreground font-mono">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>by</span>
            <span className="font-medium text-foreground">{post.author.name}</span>
            <span>·</span>
            <span className="font-mono">{post.author.role}</span>
          </div>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          {post.content}
        </div>
      </article>
    </main>
  )
} 