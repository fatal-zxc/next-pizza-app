import { useState } from 'react'

import { createCartitem } from '@/services/pizza-service'
import useCartStore, { ICart } from '@/store/cart'

interface ReturnProps {
  createItem: (
    productVariantId: number,
    cartId: number,
    productId: number,
    ingredientsIds?: number[],
    ingredientsPrice?: number
  ) => void
  isLoading: boolean
  isError: boolean
}

const useCreateCartItem = (): ReturnProps => {
  const { setCartData, cartItemsMap } = useCartStore()

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const createItem = async (
    productVariantId: number,
    cartId: number,
    productId: number,
    ingredientsIds?: number[],
    ingredientsPrice?: number
  ) => {
    setIsLoading(true)
    try {
      const newCart: ICart = await createCartitem(productVariantId, cartId, ingredientsIds, ingredientsPrice)
      cartItemsMap.set(productId, 1)
      setCartData(newCart)
    } catch (e) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return { createItem, isLoading, isError }
}

export default useCreateCartItem
