import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Eurooo Knowledge Hub — Grow Your Euros in DeFi",
    template: "%s | Eurooo Hub",
  },
  description:
    "Learn how to earn yield on EUR stablecoins like EURC in DeFi. Guides on Aave, Morpho, MiCA compliance, and Euro stablecoin strategies for European users.",
  keywords: [
    "EUR stablecoin",
    "EURC",
    "EURS",
    "DeFi yield",
    "Euro DeFi",
    "MiCA",
    "stablecoin yield",
    "Eurooo",
    "Aave EURC",
    "Morpho EURC",
    "digital euro",
    "Euro savings DeFi",
  ],
  authors: [{ name: "eurooo.xyz", url: "https://www.eurooo.xyz" }],
  creator: "eurooo.xyz",
  publisher: "eurooo.xyz",
  metadataBase: new URL("https://hub.eurooo.xyz"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/favicon-new.ico",
    apple: "/images/logo-eurooo-new.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hub.eurooo.xyz",
    siteName: "Eurooo Hub",
    title: "Eurooo Knowledge Hub — Grow Your Euros in DeFi",
    description:
      "Learn how to earn yield on EUR stablecoins like EURC in DeFi. Guides on Aave, Morpho, MiCA compliance, and Euro stablecoin strategies.",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Eurooo Knowledge Hub — Guides, tutorials, and insights on how to grow your Euros in DeFi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tekr0x",
    title: "Eurooo Knowledge Hub — Grow Your Euros in DeFi",
    description:
      "Learn how to earn yield on EUR stablecoins like EURC in DeFi. Guides on Aave, Morpho, MiCA compliance, and Euro stablecoin strategies.",
    images: ["/images/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Eurooo",
                  url: "https://www.eurooo.xyz",
                  logo: "https://hub.eurooo.xyz/images/logo-eurooo-new.png",
                  sameAs: [
                    "https://x.com/tekr0x",
                    "https://t.me/euroaborad",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Eurooo Knowledge Hub",
                  url: "https://hub.eurooo.xyz",
                  publisher: {
                    "@type": "Organization",
                    name: "Eurooo",
                  },
                  description:
                    "Guides, tutorials, and insights on EUR stablecoins and DeFi yield strategies for European users.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <SiteHeader />

            {/* Main */}
            <main className="flex-grow container py-8 px-4">
              {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-border py-8 mt-16">
              <div className="container px-4">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/logo-eurooo-new.png"
                      alt="eurooo.xyz"
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-lg object-cover"
                    />
                    <div>
                      <span className="text-sm font-medium">eurooo.xyz</span>
                      <p className="text-xs text-muted-foreground">
                        Grow Your Euros in DeFi.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* X / Twitter */}
                    <a
                      href="https://x.com/tekr0x"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-110"
                      aria-label="Follow on X"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    {/* Telegram */}
                    <a
                      href="https://t.me/+wxIKk-lsEy5kMGQ0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-300 hover:bg-[#0088cc] hover:text-white hover:scale-110"
                      aria-label="Join our Telegram"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="currentColor"
                      >
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="h-px w-full bg-border my-6" />
                <p className="text-xs text-muted-foreground text-center">
                  eurooo.xyz is an interface for third-party DeFi protocols.
                  Deposits go directly to protocols, not Eurooo.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
