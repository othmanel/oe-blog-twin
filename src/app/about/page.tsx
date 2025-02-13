import { Header } from "@/components/header"
import { getPost } from "@/lib/mdx"
import { notFound } from "next/navigation"

export default async function AboutPage() {
  const post = await getPost('about')
  
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="container py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="prose prose-zinc dark:prose-invert">
          {post.content}
        </div>
      </div>
    </main>
  )
} 