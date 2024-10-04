import Link from 'next/link'
import TokenIcon from './components/TokenIcon'
import { ArrowRight, Coins, Users, FileText, MessageCircle, BookOpen } from 'lucide-react'

export default function Home() {
  const features = [
    { name: 'Token', icon: Coins, href: '/token' },
    { name: 'Roadmap', icon: ArrowRight, href: '/roadmap' },
    { name: 'Team', icon: Users, href: '/team' },
    { name: 'FAQ', icon: FileText, href: '/faq' },
    { name: 'Contact', icon: MessageCircle, href: '/contact' },
    { name: 'Blog', icon: BookOpen, href: '/blog' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-16">
          <TokenIcon size={120} />
          <h1 className="text-5xl font-bold mt-8 mb-4">FeeFiFoFum (FFF)</h1>
          <p className="text-xl mb-4">The giant of Solana memecoins</p>
          <p className="text-2xl font-semibold mb-8">The Fee Meta is here for Memecoins</p>
          <Link 
            href="/token" 
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition duration-300"
          >
            Explore FFF
          </Link>
        </div>

        <div className="my-16 border-t border-white opacity-25"></div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Purpose</h2>
          <p className="text-xl">
            FeeFiFoFum (FFF) aims to revolutionize the memecoin space by introducing the concept of Fee Meta. 
            We&apos;re here to create a fun, engaging, and potentially rewarding experience for our community while 
            pushing the boundaries of what memecoins can achieve on the Solana blockchain.
          </p>
        </div>

        <div className="my-16 border-t border-white opacity-25"></div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">FFF Contract Address</h2>
          <a 
            href="https://solscan.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl text-purple-300 hover:text-white transition duration-300"
          >
            View on Solscan
          </a>
        </div>

        <div className="my-16 border-t border-white opacity-25"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link key={feature.name} href={feature.href}>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition duration-300 flex flex-col items-center">
                <feature.icon className="w-12 h-12 mb-4" />
                <h2 className="text-lg font-semibold">{feature.name}</h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="my-16 border-t border-white opacity-25"></div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join the FFF Community</h2>
          <p className="text-xl mb-8">
            Be part of the next big thing in the memecoin world. Together, we&apos;ll reach new heights!
          </p>
          <div className="flex justify-center items-center space-x-4">
            <TokenIcon size={40} />
            <span className="text-2xl font-bold">FeeFiFoFum</span>
          </div>
        </div>
      </div>
    </div>
  )
}
