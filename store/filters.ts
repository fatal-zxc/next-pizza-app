import { create } from 'zustand'
import { Cart, CartItem, ProductVariant, Product, Ingredient } from '@prisma/client'

interface State {
  priceFrom: number
  priceTo: number
  setPrice: (priceFrom: number, priceTo: number) => void
}

const useFiltersStore = create<State>((set) => ({
  priceFrom: 0,
  priceTo: 1500,
  setPrice: (priceFrom: number, priceTo: number) => set({ priceFrom, priceTo }),
}))

export default useFiltersStore
