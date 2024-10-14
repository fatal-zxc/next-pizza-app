import { create } from 'zustand'
import { Ingredient, Product, ProductVariant } from '@prisma/client'

interface State {
  productsData: Map<number, IProduct>
}

export interface IProduct extends Product {
  productVariant: ProductVariant[]
  ingredients: Ingredient[]
}

const useProductsStore = create<State>((set) => ({
  productsData: new Map<number, IProduct>(),
}))

export default useProductsStore
