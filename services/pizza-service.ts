import axios from 'axios'

import { Ingredient, Product } from '@prisma/client'

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

export { productsSearch, getAllIngredients }