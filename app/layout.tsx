import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
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

            <SiteFooter />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
