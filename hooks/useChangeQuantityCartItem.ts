import { useState } from 'react'

import { updateQuantityCartItem } from '@/services/pizza-service'
import useCartStore, { ICart } from '@/store/cart'

interface ReturnProps {
  changeQuantity: (
    prevQuantity: number,
    newQuantity: number,
    cartId: number,
    productId: number,
    productVariantId: number
  ) => void
  isLoading: boolean
  isError: boolean
}

const useChangeQuantityCartItem = (): ReturnProps => {
  const { setCartData, cartItemsMap } = useCartStore()

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const changeQuantity = async (
    prevQuantity: number,
    newQuantity: number,
    cartId: number,
    productId: number,
    productVariantId: number
  ) => {
    setIsLoading(true)
    try {
      const newCart: ICart = await updateQuantityCartItem(productVariantId, prevQuantity, newQuantity, cartId)
      cartItemsMap.set(productId, newQuantity)
      setCartData(newCart)
    } catch (e) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return { changeQuantity, isLoading, isError }
}

export default useChangeQuantityCartItem
