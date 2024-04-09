import { Inter } from 'next/font/google'
import './globals.css'
import IdHandler from '@/components/id-handler'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Psyche-n-Physique',
}

// TODO: MAKE SURE TO REMOVE IdHandler WRAPPER FROM LAYOUT!!!

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <IdHandler>
        <body className={inter.className}>{children}</body>
      </IdHandler>
    </html>
  )
}
