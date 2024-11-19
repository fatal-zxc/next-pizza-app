'use client'
import React from 'react'
import { ShoppingCart, ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '../ui'
import { CartDrawer } from './index'
import useGetCart from '@/hooks/useGetCart'

interface Props {
  className?: string
}

const CartButton: React.FC<Props> = ({ className }) => {
  const { cart } = useGetCart()

  return (
    <CartDrawer cart={cart}>
      <Button className={cn('group relative', className)}>
        <b>{cart ? cart.totalAmount : 0} ₽</b>
        <span className="h-full w-[1px] bg-white/30 mx-3" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart
            size={16}
            className="relative"
            strokeWidth={2}
          />
          <b>{cart && cart.items ? cart.items.length : 0}</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </CartDrawer>
  )
}

export default CartButton
