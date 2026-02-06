import { Red_Hat_Display } from 'next/font/google'
import './globals.css'

const inter = Red_Hat_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Mindenkinek Kell Egy Otthon',
  description: 'Ingatlan adás - vétel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />

        {/* 🔥 Warm Google Drive connections */}
        <link rel="preconnect" href="https://drive.google.com" />
        <link rel="dns-prefetch" href="https://drive.google.com" />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
