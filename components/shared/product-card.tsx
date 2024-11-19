'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { MouseEventHandler } from 'react'
import { Plus, Loader } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Title, CountButton } from './index'
import { Button } from '../ui'
import useCreateCartItem from '@/hooks/useCreateCartItem'
import useChangeQuantityCartItem from '@/hooks/useChangeQuantityCartItem'

interface Props {
  id: number
  name: string
  categoryId: number
  price: number
  imageUrl: string
  quantity: number
  productVariantId: number
  cartId?: number
  className?: string
}

const ProductCard: React.FC<Props> = ({
  id,
  name,
  categoryId,
  price,
  imageUrl,
  className,
  quantity,
  productVariantId,
  cartId,
}) => {
  const { createItem, isLoading } = useCreateCartItem()
  const { changeQuantity, isLoading: isLoadingQuantity } = useChangeQuantityCartItem()

  const handleCreateItem: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (categoryId === 2) return
    e.preventDefault()
    cartId && createItem(productVariantId, cartId, id)
  }

  const handleChangeQuantityItem = (type: 'plus' | 'minus') => {
    if (!cartId) return
    type === 'plus'
      ? changeQuantity(quantity, quantity + 1, cartId, id, productVariantId)
      : changeQuantity(quantity, quantity - 1, cartId, id, productVariantId)
  }

  return (
    <div className={cn('', className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <Image
            width={215}
            height={215}
            src={imageUrl}
            alt={name}
          />
        </div>
        <Title
          text={name}
          size="sm"
          className="mb-1 mt-3 font-bold"
        />
        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
        </p>
        <div className="flex justify-between items-center">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>
          {!quantity || categoryId === 2 ? (
            <Button
              variant={isLoading ? 'ghost' : 'secondary'}
              className="text-base font-bold"
              onClick={handleCreateItem}
            >
              {isLoading ? (
                <Loader className="animate-spin" />
              ) : (
                <>
                  <Plus
                    size={20}
                    className="mr-1"
                  />
                  Добавить
                </>
              )}
            </Button>
          ) : (
            <CountButton
              value={quantity}
              size="sm"
              onClick={handleChangeQuantityItem}
              isLoading={isLoadingQuantity}
              isPreventDefault={true}
            />
          )}
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
