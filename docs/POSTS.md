# Managing Blog Posts

This guide explains how to manage blog posts in your Next.js MDX blog.

## Content Types

The blog supports two types of content:
1. **Posts** - Regular blog posts that appear in the home page listing
2. **Pages** - Static pages like About, Contact that don't appear in the post listing

### Creating a Post
1. Create a new `.mdx` file in the `content/posts` directory
2. Add the required frontmatter:

```mdx
---
title: Your Post Title
date: '2024-03-21'
excerpt: A brief description of your post
category: Development
author:
  name: Your Name
  role: Your Role
---

Your content here...
```

### Creating a Page
1. Create a new `.mdx` file in the `content/posts` directory
2. Add the minimal required frontmatter:

```mdx
---
title: Your Page Title
type: page
author:
  name: Your Name
  role: Your Role
---

Your content here...
```

### Key Differences
- Posts require all frontmatter fields:
  - title, date, excerpt, category, author
  - Will appear in the home page listing
  - Are sorted by date
  - Accessible at `/posts/[slug]`

- Pages only need minimal frontmatter:
  - title, type, author
  - Not shown in post listing
  - No date/category needed
  - Accessible at their route (e.g., `/about`)

## Adding a New Post

1. Create a new `.mdx` file in the `content/posts` directory
2. Name the file using kebab-case (e.g., `my-new-post.mdx`)
3. Add the required frontmatter at the top of the file:

```mdx
---
title: Your Post Title
date: '2024-03-21'
excerpt: A brief description of your post
category: Development
author:
  name: Your Name
  role: Your Role
---

Your content here...
```

4. Write your post content using MDX syntax
5. You can use components by importing them:
```mdx
import { Callout } from '@/components/mdx/callout'

<Callout>
  Your callout content
</Callout>
```

## Editing a Post

1. Navigate to `content/posts`
2. Open the `.mdx` file you want to edit
3. Modify the frontmatter or content as needed
4. Save the file - changes will be reflected automatically

## Deleting a Post

1. Navigate to `content/posts`
2. Delete the `.mdx` file you want to remove
3. The post will be automatically removed from the blog listing

## Adding Navigation Items

To add new items to the header navigation:

1. Open `src/components/header.tsx`
2. Find the `NavigationMenuList` component
3. Add a new `NavigationMenuItem`:

```tsx
<NavigationMenuItem>
  <Link href="/your-path" className="flex items-center hover:text-primary transition-colors">
    <span className="inline-block text-lg font-bold">Your Link</span>
  </Link>
</NavigationMenuItem>
```

4. Create corresponding page in `src/app/your-path/page.tsx`

## Best Practices

- Use descriptive file names for your posts
- Always include all required frontmatter fields
- Keep excerpts concise (1-2 sentences)
- Use proper heading hierarchy (h1 -> h2 -> h3)
- Add alt text to images
- Test links before publishing
- Preview your content locally before deploying 