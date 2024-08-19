'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

import { Title, ProductCard } from './index'

interface Props {
  title: string
  products: any[]
  className?: string
  listClassName?: string
  categoryId: number
}

const ProductsGroupList: React.FC<Props> = ({
  title,
  products,
  className,
  listClassName,
  categoryId,
}) => {
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(categoryId, title)
    }
  }, [categoryId, intersection?.isIntersecting, title])

  return (
    <div className={cn('', className)} id={title} ref={intersectionRef} >
      <Title text={title} size='lg' className='font-extrabold mb-5' />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsGroupList