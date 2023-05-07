import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })
import Providers from './Providers'

export const metadata = {
  title: 'Google',
  description: 'Next Js project for google Clone',
}

// functional component of next, children refers to page.jsx;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className="relative min-h-screen">
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  )
}