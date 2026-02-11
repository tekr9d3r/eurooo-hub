import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
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
    icon: "/images/logo.png",
    apple: "/images/logo.png",
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 md:h-16 items-center justify-between px-4">
                {/* Logo + brand */}
                <a
                  href="https://www.eurooo.xyz/"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/images/logo.png"
                    alt="eurooo.xyz"
                    width={40}
                    height={40}
                    className="h-10 w-10 md:h-14 md:w-14 rounded-lg object-cover"
                  />
                  <span className="hidden sm:inline text-xl font-semibold tracking-tight">
                    eurooo.xyz
                  </span>
                </a>

                {/* Nav */}
                <div className="flex items-center gap-1 sm:gap-2">
                  <Link
                    href="/"
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                  >
                    <span>📚</span>
                    <span className="hidden sm:inline">Knowledge Hub</span>
                    <span className="sm:hidden">Learn</span>
                  </Link>
                  <a
                    href="https://www.eurooo.xyz/stats"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                  >
                    <span>📊</span>Stats
                  </a>
                  <a
                    href="https://www.eurooo.xyz/app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium text-primary-foreground h-9 rounded-md px-3 gap-1 bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 transition-colors"
                  >
                    Earn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </header>

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
                      src="/images/logo.png"
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
      </body>
    </html>
  );
}
