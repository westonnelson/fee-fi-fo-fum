import Image from 'next/image'

interface TokenIconProps {
  size?: number
}

export default function TokenIcon({ size = 40 }: TokenIconProps) {
  return (
    <Image
      src="/fff-token-icon.png"
      alt="FeeFiFoFum Token Icon"
      width={size}
      height={size}
    />
  )
}