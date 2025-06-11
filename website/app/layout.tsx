import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: {
    default: "Dose3 Starter Kit",
    template: "%s | Dose3 Starter Kit",
  },
  icons: {
    icon: "/dose.svg",
    shortcut: "/dose.svg",
    apple: "/dose.svg",
  },
  metadataBase: new URL("https://dose3.dossware.com"),
  description: "A starter kit for Dose3 applications.",
  keywords: ["Dose3", "starter kit", "template", "cli"],
  authors: [{ name: "Dose3 Team", url: "https://dose3.dossware.com" }],
  themeColor: "#000000",
  openGraph: {
    title: "Dose3 Starter Kit",
    description: "A starter kit for Dose3 applications.",
    url: "https://dose3.dossware.com",
    siteName: "Dose3 Starter Kit",
    images: [
      {
        url: "/dose-og-image.png",
        width: 1200,
        height: 630,
        alt: "Dose3 Starter Kit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dose3 Starter Kit",
    description: "A starter kit for Dose3 applications.",
    images: ["/dose-og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <meta name="algolia-site-verification"  content="6EC0C965CFE3D3B9" />
      </head>
      <body
        className={`${inter.variable} font-regular antialiased tracking-wide`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
