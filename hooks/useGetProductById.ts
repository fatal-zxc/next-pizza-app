import { useEffect, useState } from 'react'

import { getProductById } from '@/services/pizza-service'
import useProductsStore, { IProduct } from '@/store/products'

interface ReturnProps {
  product: IProduct | undefined
  isLoading: boolean
  isError: boolean
}

const useGetProductById = (id: number): ReturnProps => {
  const { productsData } = useProductsStore()
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isError, setIsError ] = useState(false)

  useEffect(() => {
    const fetchAllProducts = async () => {
      if (!productsData.has(id) && !isLoading && !isError) {
        setIsLoading(true)
        try {
          const product = await getProductById(id)
          productsData.set(id, product)
        } catch (error) {
          console.error(`Ошибка при загрузке продукта #${id}:`, error)
          setIsError(true)
        } finally {
          setIsLoading(false)
        }
      }
    }

    fetchAllProducts()
  }, [id, isLoading, productsData, isError])

  return {product: productsData.get(id), isLoading, isError}
}

export default useGetProductById
