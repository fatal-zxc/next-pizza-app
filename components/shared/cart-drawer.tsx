'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui'
import { CartDrawerItem } from './index'

interface Props {
  children: React.ReactNode
}

const CartDrawer: React.FC<Props> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>
        <div className="-mx-6 mt-5 overflow-auto scrollbar flex-1">
          <CartDrawerItem
            className="mb-2"
            CartItem={{
              id: 1,
              imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7970259D888E98B6407EE6B994D9.avif',
              details: 'большая 25см 3кг',
              price: 390,
              quantity: 1,
              name: 'додстер',
            }}
          />
          <CartDrawerItem
            className="mb-2"
            CartItem={{
              id: 1,
              imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7970259D888E98B6407EE6B994D9.avif',
              details: 'большая 25см 3кг',
              price: 390,
              quantity: 1,
              name: 'додстер',
            }}
          />
          <CartDrawerItem
            className="mb-2"
            CartItem={{
              id: 1,
              imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7970259D888E98B6407EE6B994D9.avif',
              details: 'большая 25см 3кг',
              price: 390,
              quantity: 1,
              name: 'додстер',
            }}
          />
          <CartDrawerItem
            className="mb-2"
            CartItem={{
              id: 1,
              imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7970259D888E98B6407EE6B994D9.avif',
              details: 'большая 25см 3кг',
              price: 390,
              quantity: 1,
              name: 'додстер',
            }}
          />
          <CartDrawerItem
            className="mb-2"
            CartItem={{
              id: 1,
              imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7970259D888E98B6407EE6B994D9.avif',
              details: 'большая 25см 3кг',
              price: 390,
              quantity: 1,
              name: 'додстер',
            }}
          />
          <CartDrawerItem
            className="mb-2"
            CartItem={{
              id: 1,
              imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7970259D888E98B6407EE6B994D9.avif',
              details: 'большая 25см 3кг',
              price: 390,
              quantity: 1,
              name: 'додстер',
            }}
          />
        </div>
        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">520 ₽</span>
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
