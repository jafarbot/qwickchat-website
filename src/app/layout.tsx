import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QuickChat - AI That Runs Your Business Operations',
  description: 'Local AI automation for businesses in Manalapan, NJ and surrounding areas. Appointment booking, lead generation, customer support, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
