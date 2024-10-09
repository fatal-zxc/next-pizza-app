import { useEffect, useState } from 'react'

import { getAllCategories, CategoryGet } from '@/services/pizza-service'
import useCategoryStore from '@/store/category'

interface ReturnProps {
  categories: CategoryGet[]
  isLoading: boolean
}

const useGetCategory = () => {
  const { categoryData, setCategoryData } = useCategoryStore()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchCategories = async () => {
      if (categoryData.length === 0 && !isLoading) {
        setIsLoading(true)
        try {
          const data = await getAllCategories();
          setCategoryData(data)
        } catch (error) {
          console.error("Ошибка при загрузке категорий:", error)
        } finally {
          setIsLoading(false)
        }
      }
    };

    fetchCategories()
  }, [categoryData, setCategoryData, isLoading])

  return { categories: categoryData, isLoading }
};

export default useGetCategory