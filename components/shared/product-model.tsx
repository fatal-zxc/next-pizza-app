'use client'
import React, { MouseEventHandler } from 'react'

import { IProduct } from '@/store/products'
import { cn } from '@/lib/utils'
import { Button } from '../ui'
import { CountButton, ProductImage, Title } from './index'
import { useCreateCartItem, useChangeQuantityCartItem } from '@/hooks/index'
import useCartStore from '@/store/cart'

interface Props {
  className?: string
  product: IProduct
  notify: () => void
}

const ProductModel: React.FC<Props> = ({ className, product, notify }) => {
  const { createItem, isLoading } = useCreateCartItem()
  const { cart, cartItemsMap } = useCartStore()
  const { changeQuantity, isLoading: isLoadingQuantity } = useChangeQuantityCartItem()
  const quantity = cartItemsMap.get(product.id) || 0

  const handleCreateItem: MouseEventHandler<HTMLButtonElement> = () => {
    cart && createItem(product.productVariant[0].id, cart.id, product.id)
    notify()
  }

  const handleChangeQuantityItem = (type: 'plus' | 'minus') => {
    if (!cart) return
    type === 'plus'
      ? changeQuantity(quantity, quantity + 1, cart.id, product.id, product.productVariant[0].id)
      : changeQuantity(quantity, quantity - 1, cart.id, product.id, product.productVariant[0].id)
  }

  return (
    <div className={cn('flex flex-1', className)}>
      <ProductImage
        imageUrl={product.imageUrl}
        imageAlt={product.name}
      />
      <div className="w-[490px] bg-[#f7f6f5] flex flex-col justify-between p-7">
        <div className="">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">1 шт, 300 г</p>
        </div>
        {quantity ? (
          <CountButton
            value={quantity}
            size="lg"
            onClick={handleChangeQuantityItem}
            isLoading={isLoadingQuantity}
            isPreventDefault={true}
          />
        ) : (
          <Button
            disabled={isLoading}
            className="h-[55px] px-10 text-base rounded-[18px] w-full mb-5"
            onClick={handleCreateItem}
          >
            Добавить в корзину за {product.productVariant[0].price} ₽
          </Button>
        )}
      </div>
    </div>
  )
}

export default ProductModel
