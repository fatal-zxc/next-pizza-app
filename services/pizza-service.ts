import axios from 'axios'

import { Ingredient, Product, Category, ProductVariant } from '@prisma/client'

export type ProductGet = Product & {
  productVariant: ProductVariant[]
}

export type CategoryGet = Category & {
  products: ProductGet[]
}

const pizzaInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const productsSearch = async (text: string) => {
  const { data } = await pizzaInstance.get<Product[]>('/products/search', { params: { text } })
  return data
}

const getAllIngredients = async () => {
  const { data } = await pizzaInstance.get<Ingredient[]>('/ingredients')
  return data
}

const getAllCategories = async (priceFrom?: number, priceTo?: number) => {
  const { data } = await pizzaInstance.get<CategoryGet[]>('/categories', { params: { priceFrom, priceTo } })
  return data
}

const getAllProducts = async () => {
  const { data } = await pizzaInstance.get<Product[]>('/products')
  return data
}

const getProductById = async (id: number) => {
  const { data } = await pizzaInstance.get(`/products/${id}`)
  return data
}

const getCart = async () => {
  const { data } = await pizzaInstance.get('/cart')
  return data
}

const createCartitem = async (
  productItemId: number,
  cartId: number,
  ingredientsIds?: number[],
  ingredientsPrice?: number
) => {
  const { data } = await pizzaInstance.post('/cartItem', { productItemId, cartId, ingredientsIds, ingredientsPrice })
  return data
}

const deleteCartItem = async (cartItemId: number, cartId: number) => {
  const { data } = await pizzaInstance.delete('/cartItem', { data: { cartItemId, cartId } })
  return data
}

const updateQuantityCartItem = async (
  productVariantId: number,
  prevQuantity: number,
  newQuantity: number,
  cartId: number
) => {
  const { data } = await pizzaInstance.patch('/cartItem', { productVariantId, prevQuantity, newQuantity, cartId })
  return data
}

export {
  productsSearch,
  getAllIngredients,
  getAllCategories,
  getAllProducts,
  getProductById,
  getCart,
  createCartitem,
  deleteCartItem,
  updateQuantityCartItem,
}
