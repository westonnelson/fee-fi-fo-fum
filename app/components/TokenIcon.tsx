import React from 'react'

interface TokenIconProps {
  size?: number
}

export default function TokenIcon({ size = 40 }: TokenIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#9945FF" />
      <path d="M25 75L50 25L75 75H25Z" fill="#c9e514" />
      <text x="50" y="80" fontSize="28" fontWeight="bold" textAnchor="middle" fill="#9945FF">FFF</text>
    </svg>
  )
}
