# Next.js Blog Template

A lightweight, SEO-friendly blog template built with Next.js, TypeScript, and Tailwind CSS. Write your posts in Markdown and deploy to Vercel with automatic builds on every push.

## Features

- ✅ **SEO Optimized**: Built-in meta tags, Open Graph, and Twitter cards
- ✅ **Markdown Support**: Write posts in Markdown with frontmatter
- ✅ **Static Generation**: Pre-rendered at build time for maximum performance
- ✅ **Responsive Design**: Mobile-friendly with Tailwind CSS
- ✅ **Zero Config Deployment**: Deploy to Vercel with one click
- ✅ **TypeScript**: Fully typed for better development experience
- ✅ **Automatic Routing**: File-based routing for blog posts

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Add Blog Posts

Create a new Markdown file in the `posts` directory:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
description: "A brief description of your post"
---

# Your Post Title

Your content here...
```

**Frontmatter Fields:**
- `title`: Post title (required)
- `date`: Publication date in YYYY-MM-DD format (required)
- `description`: Short description for SEO and post listing (required)

### 4. Build for Production

```bash
npm run build
```

This generates a static export in the `out` directory.

## Deployment to Vercel

### Option 1: Deploy with Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Automatic Deployments

Once connected, every push to your main branch will trigger a new deployment. Add new posts by:

```bash
# Add your new markdown file
git add posts/my-new-post.md
git commit -m "Add new blog post"
git push
```

Vercel will automatically rebuild and deploy your site.

## Customization

### Update Site Metadata

Edit `app/layout.tsx` to update:
- Site title and description
- Social media links
- Author information
- Open Graph images

### Styling

The blog uses Tailwind CSS. Customize:
- Colors and fonts in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Blog content styles in the `.prose` class

### Add Features

Some ideas for extending the blog:
- Add a search function
- Include categories or tags
- Add syntax highlighting for code blocks
- Include a newsletter signup
- Add reading time estimates

## Project Structure

```
blog-template/
├── app/                    # Next.js app directory
│   ├── blog/[slug]/       # Dynamic blog post pages
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage (post listing)
│   └── globals.css        # Global styles
├── lib/
│   └── posts.ts           # Markdown parsing utilities
├── posts/                 # Your blog posts (Markdown)
│   ├── example-post.md
│   └── another-post.md
├── public/                # Static assets
├── next.config.ts         # Next.js configuration
├── package.json
└── README.md
```

## SEO Features

This template includes:
- Dynamic meta tags per post
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Mobile-responsive design
- Fast loading times with static generation

## License

MIT - feel free to use this template for your own blog!

## Support

For issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Visit the [Vercel documentation](https://vercel.com/docs)
- Open an issue on GitHub
