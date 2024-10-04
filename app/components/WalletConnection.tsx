'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { useEffect, useState } from 'react'

export default function WalletConnection() {
  const { publicKey, connected } = useWallet()
  const [balance, setBalance] = useState<number | null>(null)

  useEffect(() => {
    if (connected && publicKey) {
      // In a real application, you would use a RPC connection to fetch the balance
      // This is just a placeholder
      setBalance(Math.random() * 100)
    } else {
      setBalance(null)
    }
  }, [connected, publicKey])

  return (
    <div className="flex flex-col items-center space-y-4 mb-4">
      <WalletMultiButton />
      {connected && balance !== null && (
        <div>
          <p>Connected: {publicKey?.toBase58()}</p>
          <p>Balance: {(balance / LAMPORTS_PER_SOL).toFixed(2)} SOL</p>
        </div>
      )}
    </div>
  )
}