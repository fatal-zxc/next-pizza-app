import { useState } from 'react'

import { deleteCartItem } from '@/services/pizza-service'
import useCartStore, { ICart } from '@/store/cart'

interface ReturnProps {
  deleteItem: (cartItemId: number, cartId: number, productId: number) => void
  isLoading: boolean
  isError: boolean
}

const useDeleteCartItem = (): ReturnProps => {
  const { setCartData, cartItemsMap } = useCartStore()

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const deleteItem = async (cartItemId: number, cartId: number, productId: number) => {
    setIsLoading(true)
    try {
      const newCart: ICart = await deleteCartItem(cartItemId, cartId)
      cartItemsMap.delete(productId)
      setCartData(newCart)
    } catch (e) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return { deleteItem, isLoading, isError }
}

export default useDeleteCartItem
