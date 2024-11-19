import { create } from 'zustand'
import { Cart, CartItem, ProductVariant, Product, Ingredient } from '@prisma/client'

interface IProductVariant extends ProductVariant {
  product: Product
}

interface ICartItem extends CartItem {
  productItem: IProductVariant
  ingredients: Ingredient[]
}

export interface ICart extends Cart {
  items: ICartItem[]
}

interface State {
  cart: ICart | undefined
  cartItemsMap: Map<number, number>
  setCartData: (cart: ICart) => void
}

const useCartStore = create<State>((set) => ({
  cart: undefined,
  cartItemsMap: new Map<number, number>(),
  setCartData: (cart: ICart) => set({ cart }),
}))

export default useCartStore
