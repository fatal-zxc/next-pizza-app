import { useEffect, useState } from 'react'

import { getAllCategories, CategoryGet, ProductGet } from '@/services/pizza-service'
import useCategoryStore from '@/store/category'
import useFiltersStore from '@/store/filters'

interface ReturnProps {
  categories: CategoryGet[]
  isLoading: boolean
}

const useGetCategory = (): ReturnProps => {
  const { categoryData, setCategoryData } = useCategoryStore()
  const { priceFrom, priceTo } = useFiltersStore()

  const [isLoading, setIsLoading] = useState(false)
  const [prevPriceFrom, setPrevPriceFrom] = useState<number | undefined>(undefined)
  const [prevPriceTo, setPrevPriceTo] = useState<number | undefined>(undefined)
  const [coldCategories, setColdCategories] = useState<CategoryGet[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      if (categoryData.length === 0 && !isLoading) {
        setIsLoading(true)
        try {
          const data = await getAllCategories()
          setCategoryData(data)
          setColdCategories(data)
        } catch (error) {
          console.error('Ошибка при загрузке категорий:', error)
        } finally {
          setIsLoading(false)
        }
      }
    }

    fetchCategories()
  }, [categoryData, setCategoryData, isLoading])

  useEffect(() => {
    if (prevPriceFrom !== priceFrom || prevPriceTo !== priceTo) {
      const hotCategories = structuredClone(coldCategories)
      const newCategories = hotCategories.map((category) => {
        const newProducts = category.products
          .map((product) => {
            if (product.productVariant[0].price >= priceFrom && product.productVariant[0].price <= priceTo)
              return product
          })
          .filter((product) => product !== undefined)
        category.products = newProducts
        return category
      })

      setPrevPriceFrom(priceFrom)
      setPrevPriceTo(priceTo)
      setCategoryData(newCategories)
    }
  }, [priceFrom, priceTo, categoryData, setCategoryData, prevPriceFrom, prevPriceTo, coldCategories])

  return { categories: categoryData, isLoading }
}

export default useGetCategory
