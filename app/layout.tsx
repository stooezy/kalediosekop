import type { Metadata } from 'next'
import { Fraunces as FontDisplay, Inter as FontSans } from 'next/font/google'

import './globals.css'

import { cn } from '@/lib/utils'
import ThemeProvider from '@/components/theme/theme-provider'

const fontSans = FontSans({
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-sans',
})

const fontDisplay = FontDisplay({
  subsets: ['latin'],
  style: ['italic'],
  axes: ['opsz'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Boilerplate nextjs',
  description: 'Boilerplate nextjs',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen w-screen overflow-x-hidden bg-background font-sans text-foreground antialiased',
          fontDisplay.variable,
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
