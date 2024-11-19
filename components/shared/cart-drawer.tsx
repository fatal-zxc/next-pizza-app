import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui'
import { CartDrawerItem } from './index'
import { ICart } from '@/store/cart'

interface Props {
  children: React.ReactNode
  cart?: ICart
}

const CartDrawer: React.FC<Props> = ({ children, cart }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">{cart && cart.items ? cart.items.length : 0} товара</span>
          </SheetTitle>
        </SheetHeader>
        <div className="-mx-6 mt-5 overflow-auto scrollbar flex-1">
          {cart &&
            cart.items.map((cartItem) => (
              <CartDrawerItem
                className="mb-2"
                key={cartItem.id}
                name={cartItem.productItem.product.name}
                imageUrl={cartItem.productItem.product.imageUrl}
                details={cartItem.ingredients
                  .reduce(
                    (details, ingredient) => {
                      return (details += ingredient.name + ', ')
                    },
                    cartItem.productItem.product.categoryId === 2
                      ? `${cartItem.productItem.type === 'THIN' ? 'Тонкая' : 'Традиционная'} ${cartItem.productItem.size}см, `
                      : ''
                  )
                  .slice(0, -2)}
                quantity={cartItem.quantity}
                price={
                  cartItem.productItem.price +
                  cartItem.ingredients.reduce((acc, ingredient) => {
                    return (acc += ingredient.price)
                  }, 0)
                }
                cartItemId={cartItem.id}
                cartId={cart.id}
                productId={cartItem.productItem.product.id}
                productVariantId={cartItem.productItem.id}
                isPizza={cartItem.productItem.product.categoryId === 2}
              />
            ))}
        </div>
        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">{cart ? cart.totalAmount : 0} ₽</span>
            </div>
            <Link href="/cart">
              <Button
                type="submit"
                className="w-full h-12 text-base"
              >
                Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default CartDrawer
