import React from 'react'

import { IProduct } from '@/store/products'
import { cn } from '@/lib/utils'
import ProductImage from './product-image'
import { Title } from './title'
import { Button } from '../ui'

interface Props {
  className?: string
  product: IProduct
  onClickAdd?: VoidFunction
}

const ProductModel: React.FC<Props> = ({ className, product }) => {
  return (
    <div className={cn('flex flex-1', className)}>
      <ProductImage imageUrl={product.imageUrl} imageAlt={product.name} />
      <div className='w-[490px] bg-[#f7f6f5] flex flex-col justify-between p-7'>
        <div className=''>
          <Title text={product.name} size='md' className='font-extrabold mb-1' />
          <p className='text-gray-400'>1 шт, 300 г</p>
        </div>
        <Button className='h-[55px] px-10 text-base rounded-[18px] w-full mb-5'>Добавить в корзину за {product.productVariant [0].price} ₽</Button>
      </div>
    </div>
  )
}

export default ProductModel
