import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div>
      {/* Hero */}
      <section className="mb-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Knowledge Hub
        </h1>
        <p className="text-lg text-muted-foreground">
          Guides, tutorials, and insights on how to grow your Euros in DeFi
          with the Eurooo protocol.
        </p>
      </section>

      {/* Articles grid */}
      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
          Latest articles
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article
                className="h-full rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-base font-medium group-hover:text-primary transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {post.description}
                </p>
                <time className="text-xs text-muted-foreground/70">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </article>
            </Link>
          ))}

          {posts.length === 0 && (
            <div className="col-span-full text-center py-16 text-muted-foreground">
              <p>No articles yet. Add markdown files to the posts/ directory.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 p-6 rounded-lg bg-muted/50 text-center">
        <p className="text-muted-foreground mb-4">
          Ready to start earning yield on your EUR stablecoins?
        </p>
        <a
          href="https://www.eurooo.xyz/app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          Compare Live Yields
          <span>&rarr;</span>
        </a>
      </section>
    </div>
  );
}
