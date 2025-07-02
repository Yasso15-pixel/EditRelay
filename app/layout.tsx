// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EditRelay – Video Editing & Content Agency',
  description: 'EditRelay helps creators grow with video editing, podcast production, account management, and content repurposing services.',
  keywords: ['video editing', 'podcast editing', 'content repurposing', 'YouTube growth', 'EditRelay', 'social media agency'],
  authors: [{ name: 'EditRelay Team' }],
  openGraph: {
    title: 'EditRelay – Video Editing & Content Agency',
    description: 'Helping creators scale with content editing, strategy, and digital management.',
    url: 'https://editrelay.com',
    siteName: 'EditRelay',
    images: [
      {
        url: 'https://editrelay.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EditRelay Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EditRelay – Video Editing & Content Agency',
    description: 'Helping creators scale with editing, repurposing, and management.',
    images: ['https://editrelay.com/og-image.png'],
  },
  metadataBase: new URL('https://editrelay.com'),
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Removed viewport meta tag */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EditRelay",
              url: "https://editrelay.com",
              logo: "https://editrelay.com/logo.png",
              sameAs: [
                "https://instagram.com/editrelay",
                "https://twitter.com/editrelay",
                "https://youtube.com/@editrelay"
              ]
            }),
          }}
        />
      </head>
      <body className="bg-white text-black font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
