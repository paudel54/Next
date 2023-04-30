import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chitra',
  description: 'imdb Clone web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {/*  Navbar*/}
        {/* SearchBox */}
        {children}
      </body>
    </html>
  )
}

// add anything that is common on layout section: some thing are not changed such element or componnet in layout. 