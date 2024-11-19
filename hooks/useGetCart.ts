import { useEffect, useState } from 'react'

import { getCart } from '@/services/pizza-service'
import useCartStore, { ICart } from '@/store/cart'

interface ReturnProps {
  cart: ICart | undefined
  isLoading: boolean
}

const useGetCart = (): ReturnProps => {
  const { cart, cartItemsMap, setCartData } = useCartStore()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchCart = async () => {
      if (!cart && !isLoading) {
        setIsLoading(true)
        try {
          const cart: ICart = await getCart()
          cart.items.forEach((item) => {
            cartItemsMap.set(item.productItem.product.id, item.quantity)
          })
          setCartData(cart)
        } catch (e) {
          console.log(e)
        } finally {
          setIsLoading(false)
        }
      }
    }

    fetchCart()
  }, [cart, isLoading, cartItemsMap, setCartData])

  return { cart, isLoading }
}

export default useGetCart
