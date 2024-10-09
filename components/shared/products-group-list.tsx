'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef, FC } from 'react'
import { useIntersection } from 'react-use'

import { Title, ProductCard } from './index'
import useCategoryStore from '@/store/category'
import { ProductGet } from '@/services/pizza-service'

interface Props {
  title: string
  products: ProductGet[]
  className?: string
  listClassName?: string
  categoryId: number
}

const ProductsGroupList: FC<Props> = ({ title, products, className, listClassName, categoryId }) => {
  const setActiveCategotyId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategotyId(categoryId)
    }
  }, [setActiveCategotyId, categoryId, intersection?.isIntersecting])

  return (
    <div
      className={cn('w-[955px]', className)}
      id={title}
      ref={intersectionRef}
    >
      <Title
        text={title}
        size="lg"
        className="font-extrabold mb-5"
      />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.productVariant[0].price}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsGroupList
