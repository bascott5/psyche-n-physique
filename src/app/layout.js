import { Inter } from 'next/font/google'
import './globals.css'
import NavMenu from '@/components/nav-menu'
import Head from 'next/head'
import favicon from './icon.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Psyche & Physique',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href={ favicon }  />
      </Head>
      <body className={inter.className}>
        <NavMenu>
          {children}
        </NavMenu>
      </body>
    </html>
  )
}
