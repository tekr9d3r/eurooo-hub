# Eurooo Knowledge Hub

The educational blog for [eurooo.xyz](https://www.eurooo.xyz/) — a DeFi yield aggregator for EUR stablecoins. This Knowledge Hub helps users understand EUR stablecoins, MiCA regulation, DeFi yield strategies, and how to earn yield on their digital euros.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with CSS variable-based design tokens
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (dark/light mode)
- **Content:** Markdown with frontmatter (gray-matter + remark)
- **Deployment:** [Vercel](https://vercel.com/)
- **Font:** Inter

## Blog Topics

- What are EUR stablecoins?
- EURC vs EURS vs EURCv comparison
- DeFi yield strategies for Europeans
- MiCA compliance explained
- EUR stablecoins vs the Digital Euro (CBDC)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Adding a Blog Post

Create a new `.md` file in the `posts/` directory:

```markdown
---
title: "Your Post Title"
date: "2025-01-15"
description: "A brief description for SEO"
---

Your content here...
```

## Project Structure

```
eurooo-hub/
├── app/
│   ├── blog/[slug]/       # Blog post pages
│   ├── layout.tsx          # Root layout (header, footer)
│   ├── page.tsx            # Homepage (post listing)
│   └── globals.css         # Design tokens & styles
├── components/
│   └── theme-provider.tsx  # Dark/light theme wrapper
├── lib/
│   └── posts.ts            # Markdown parsing
├── posts/                  # Blog content (Markdown)
├── public/images/          # Static assets
└── next.config.ts          # Next.js config
```

## Links

- **Website:** [eurooo.xyz](https://www.eurooo.xyz/)
- **Knowledge Hub:** [hub.eurooo.xyz](https://hub.eurooo.xyz/)
- **X (Twitter):** [@tekr0x](https://x.com/tekr0x)
- **Telegram:** [t.me/euroaborad](https://t.me/euroaborad)
