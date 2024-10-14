import Image from 'next/image'
import React from 'react'

import { cn } from '@/lib/utils'

interface Props {
  className?: string
  imageUrl: string
  imageAlt: string
  size?: number
}

const ProductImage: React.FC<Props> = ({ className, imageUrl, imageAlt, size }) => {
  return (
    <div className={cn('flex items-center justify-center flex-1 relative w-[500px] h-[500px]', className)}>
      <Image
        className={'relative left-2 top-2 transition-all z-10 duration-300'}
        src={imageUrl}
        alt={imageAlt}
        width={size === 25 ? 300 : size === 30 ? 400 : size === 35 ? 500 : 300}
        height={size === 25 ? 300 : size === 30 ? 400 : size === 35 ? 500 : 300}
      />
      {size && <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[440px] h-[440px] '></div>}
      {size && <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[360px] h-[360px] '></div>}
    </div>
  )
}

export default ProductImage
