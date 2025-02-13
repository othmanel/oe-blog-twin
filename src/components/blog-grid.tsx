import { memo } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Post } from "@/lib/mdx"

const PostCard = memo(function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="group transition-colors hover:bg-muted/50">
        <div className="flex gap-4 p-4">
          <div className="space-y-1 min-w-0">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="font-mono text-[10px]">
                {post.category}
              </Badge>
              <span className="text-[10px] text-muted-foreground font-mono">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </div>
            <h3 className="font-semibold leading-tight truncate">
              {post.title}
            </h3>
            <p className="line-clamp-1 text-xs text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-muted-foreground">
                by <span className="text-foreground font-medium">{post.author.name}</span>
              </span>
              <span className="text-muted-foreground font-mono">
                {post.author.role}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
})

interface BlogGridProps {
  posts: Post[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {posts.map(post => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
} 