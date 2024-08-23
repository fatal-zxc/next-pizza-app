import axios from 'axios'

import { Ingredient, Product, Category, ProductVariant } from '@prisma/client'

export type ProductGet = Product & {
  productVariant: ProductVariant[]
}

export type CategoryGet = Category & {
  products: ProductGet[]
}

const pizzaInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

const productsSearch = async (text: string) => {
  const {data} = await pizzaInstance.get<Product[]>('/products/search', {params: { text }})
  return data
}

const getAllIngredients = async () => {
  const {data} = await pizzaInstance.get<Ingredient[]>('/ingredients')
  return data
}

const getAllCategories = async () => {
  const {data} = await pizzaInstance.get<CategoryGet[]>('/categories')
  return data
}

export { productsSearch, getAllIngredients, getAllCategories }