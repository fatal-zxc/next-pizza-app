import React from 'react'

import { cn } from '@/lib/utils'
import { Image, Info, Price } from './cart-item-details/index'
import { CartItemProps } from './cart-item-details/cart-item-details.types'
import CountButton from './count-button'
import { Trash2Icon } from 'lucide-react'

interface Props {
  className?: string
  CartItem: CartItemProps
}

const CartDrawerItem: React.FC<Props> = ({ className, CartItem }) => {
  const { name, imageUrl, details, quantity, price } = CartItem
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
          <CountButton
            onClick={(type) => console.log(type)}
            value={quantity}
          />
          <div className="flex items-center gap-3">
            <Price value={price} />
            <Trash2Icon
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDrawerItem
