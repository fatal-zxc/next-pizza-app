import Image from 'next/image'

import { cn } from '@/lib/utils'

interface Props {
  src: string
  alt: string
  className?: string
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, alt, className }) => {
  return (
    <Image
      className={cn('w-[60px] h-[60px]', className)}
      width={60}
      height={60}
      alt={alt}
      src={src}
    />
  )
}
