import { Header } from "@/components/header"
import { BlogGrid } from "@/components/blog-grid"
import { getAllPosts } from "@/lib/mdx"

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <div className="container py-8">
        <h1 className="mb-8 text-4xl font-bold">Latest Posts</h1>
        <BlogGrid posts={posts} />
      </div>
    </main>
  )
}
