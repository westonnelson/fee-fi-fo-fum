import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import WalletConnectionProvider from './components/WalletConnectionProvider'
import WalletConnection from './components/WalletConnection'
import TokenIcon from './components/TokenIcon'
import { Menu } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FeeFiFoFum (FFF) - Solana Memecoin',
  description: 'The giant of Solana memecoins',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletConnectionProvider>
          <div className="flex flex-col min-h-screen bg-purple-900">
            <header className="bg-purple-800 text-white p-4 sticky top-0 z-10">
              <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <TokenIcon size={32} />
                  <span className="text-xl font-bold">FeeFiFoFum</span>
                </Link>
                <div className="md:hidden">
                  <button className="p-2">
                    <Menu className="w-6 h-6" />
                  </button>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                  <Link href="/token" className="hover:text-purple-300 transition duration-300">Token</Link>
                  <Link href="/roadmap" className="hover:text-purple-300 transition duration-300">Roadmap</Link>
                  <Link href="/team" className="hover:text-purple-300 transition duration-300">Team</Link>
                  <Link href="/faq" className="hover:text-purple-300 transition duration-300">FAQ</Link>
                  <Link href="/contact" className="hover:text-purple-300 transition duration-300">Contact</Link>
                  <Link href="/blog" className="hover:text-purple-300 transition duration-300">Blog</Link>
                </div>
              </nav>
            </header>
            <main className="flex-grow">
              <div className="container mx-auto px-4 py-8">
                <WalletConnection />
                {children}
              </div>
            </main>
            <footer className="bg-purple-800 text-white p-4">
              <div className="container mx-auto text-center">
                © 2024 FeeFiFoFum (FFF). All rights reserved.
              </div>
            </footer>
          </div>
        </WalletConnectionProvider>
      </body>
    </html>
  )
}
