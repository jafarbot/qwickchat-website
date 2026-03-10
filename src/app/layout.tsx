import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'QwickChat — Your Own AI Agent, Running 24/7',
  description: 'Personal AI assistant on Telegram. We handle everything — server, setup, configuration. $149.99 one-time. Includes 1 year hosting. You own it forever.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script 
          defer 
          src="https://cloud.umami.is/script.js" 
          data-website-id="66823b89-ad39-4827-9f1c-d0560bf7414b"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
