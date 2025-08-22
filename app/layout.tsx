import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Steven Chen - Entrepreneur, Investor, Advocate",
  description:
    "Personal website of Steven Chen - entrepreneur, angel investor, prototyper, Asian American advocate, photographer, and violinist.",
  keywords: "Steven Chen, entrepreneur, angel investor, Asian American advocate, violinist, photographer",
  authors: [{ name: "Steven Chen" }],
  openGraph: {
    title: "Steven Chen - Entrepreneur, Investor, Advocate",
    description:
      "Personal website of Steven Chen - entrepreneur, angel investor, prototyper, Asian American advocate, photographer, and violinist.",
    url: "https://stevenchen.me",
    siteName: "Steven Chen",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" style={{ fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
