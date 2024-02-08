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
      <meta name="viewport" content="width=device-width" />
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
