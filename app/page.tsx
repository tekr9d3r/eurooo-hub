import Image from "next/image";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPostsData();
  const [latestPost, ...olderPosts] = posts;

  return (
    <div>
      {/* Hero */}
      <section className="mb-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          EUR Stablecoin Knowledge Hub
        </h1>
        <p className="text-lg text-muted-foreground">
          Guides, tutorials, and insights on how to grow your Euros in DeFi
          with the Eurooo protocol.
        </p>
      </section>

      {/* Latest post — full width */}
      {latestPost && (
        <section className="mb-12">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
            Latest article
          </h2>
          <Link href={`/blog/${latestPost.slug}`} className="group">
            <article className="rounded-lg border border-border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
              {latestPost.coverImage && (
                <div className="w-full">
                  <Image
                    src={latestPost.coverImage}
                    alt={latestPost.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto"
                    sizes="100vw"
                    priority
                  />
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors mb-3 leading-snug">
                  {latestPost.title}
                </h3>
                <p className="text-muted-foreground mb-4 max-w-2xl">
                  {latestPost.description}
                </p>
                <time className="text-sm text-muted-foreground/70">
                  {new Date(latestPost.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* Older posts — 3-column gallery */}
      {olderPosts.length > 0 && (
        <section>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
            More articles
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {olderPosts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article
                  className="h-full rounded-lg border border-border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {post.coverImage && (
                    <div className="w-full">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        width={1200}
                        height={630}
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-4">
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
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <p>No articles yet. Add markdown files to the posts/ directory.</p>
        </div>
      )}

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
