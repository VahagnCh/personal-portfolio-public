import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
