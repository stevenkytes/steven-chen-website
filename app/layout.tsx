import type { Metadata } from 'next'
import { Poppins, Open_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Steven Chen - Entrepreneur, Investor, Advocate',
  description: 'Personal website of Steven Chen - entrepreneur, angel investor, prototyper, Asian American advocate, photographer, and violinist.',
  keywords: 'Steven Chen, entrepreneur, angel investor, Asian American advocate, violinist, photographer',
  authors: [{ name: 'Steven Chen' }],
  openGraph: {
    title: 'Steven Chen - Entrepreneur, Investor, Advocate',
    description: 'Personal website of Steven Chen - entrepreneur, angel investor, prototyper, Asian American advocate, photographer, and violinist.',
    url: 'https://stevenchen.me',
    siteName: 'Steven Chen',
    type: 'website',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${poppins.variable} ${openSans.variable} font-sans antialiased bg-navy text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
