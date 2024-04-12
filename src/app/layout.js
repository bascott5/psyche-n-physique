import { Inter } from 'next/font/google'
import './globals.css'
import NavMenu from '@/components/nav-menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Psyche-n-Physique',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavMenu>
          {children}
        </NavMenu>
      </body>
    </html>
  )
}
