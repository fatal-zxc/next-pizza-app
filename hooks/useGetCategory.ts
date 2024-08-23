import { Product, Category } from '@prisma/client'
import { useEffect, useState } from 'react'

import { getAllCategories, CategoryGet } from '@/services/pizza-service'

interface ReturnProps {
  categories: CategoryGet[]
  isLoading: boolean
}

const useGetCategory = (): ReturnProps => {
  const [categories, setCategories] = useState<CategoryGet[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data)
      setIsLoading(false)
    }).catch(e => {
      console.log(e)
    })
  }, [])

  return { categories, isLoading }
}

export default useGetCategory