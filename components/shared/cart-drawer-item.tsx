'use client'
import React, { MouseEventHandler } from 'react'
import { Loader, Trash2Icon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Image, Info, Price } from './cart-item-details/index'
import { CartItemProps } from './cart-item-details/cart-item-details.types'
import CountButton from './count-button'
import useDeleteCartItem from '@/hooks/useDeleteCartItem'
import useChangeQuantityCartItem from '@/hooks/useChangeQuantityCartItem'

interface Props extends CartItemProps {
  cartItemId: number
  cartId: number
  productId: number
  productVariantId: number
  isPizza: boolean
  className?: string
}

const CartDrawerItem: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  details,
  quantity,
  price,
  cartItemId,
  cartId,
  productId,
  productVariantId,
  isPizza,
}) => {
  const { deleteItem, isLoading: isLoadingDelete } = useDeleteCartItem()
  const { changeQuantity, isLoading: isLoadingQuantity } = useChangeQuantityCartItem()

  const handleDeleteItem: MouseEventHandler<SVGElement> = () => {
    deleteItem(cartItemId, cartId, productId)
  }

  const handleChangeQuantityItem = (type: 'plus' | 'minus') => {
    console.log(productVariantId)
    type === 'plus'
      ? changeQuantity(quantity, quantity + 1, cartId, productId, productVariantId)
      : changeQuantity(quantity, quantity - 1, cartId, productId, productVariantId)
  }

  return (
    <div className={cn('flex bg-white p-5 gap-6', className)}>
      <Image
        src={imageUrl}
        alt={name}
      />
      <div className="flex-1">
        <Info
          name={name}
          details={details}
        />
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          {!isPizza && (
            <CountButton
              onClick={handleChangeQuantityItem}
              isLoading={isLoadingQuantity}
              value={quantity}
            />
          )}
          <div className="flex items-center gap-3">
            <Price value={price * quantity} />
            {isLoadingDelete ? (
              <Loader className="animate-spin" />
            ) : (
              <Trash2Icon
                className="text-gray-400 cursor-pointer hover:text-gray-600"
                size={16}
                onClick={handleDeleteItem}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDrawerItem
