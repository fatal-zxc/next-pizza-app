import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'

import { getAllIngredients } from '@/services/pizza-service'
import useIngedientsStore from '@/store/ingredients'

interface ReturnProps {
  ingredientsData: Ingredient[]
  isLoading: boolean
  selectedIds: Set<number>
  toggle: (id: number) => void
}

const useFilterIngredients = (): ReturnProps => {
  const { selectedIds: selectedIdsData, ingredientsData, setSelectedIds, setIngredientsData } = useIngedientsStore()

  const [isLoading, setIsLoading] = useState(false)
  const [selectedIds, { toggle }] = useSet(selectedIdsData)

  useEffect(() => {
    const fetchIngredients = async () => {
      if (ingredientsData.length === 0 && !isLoading) {
        setIsLoading(true)
        try {
          const data = await getAllIngredients()
          setIngredientsData(data)
        } catch (error) {
          console.error('Ошибка при загрузке ингредиентов:', error)
        } finally {
          setIsLoading(false)
        }
      }
    }

    fetchIngredients()
  }, [ingredientsData, setIngredientsData, isLoading])

  useEffect(() => {
    setSelectedIds(selectedIds)
  }, [selectedIds, setSelectedIds])

  return { ingredientsData, isLoading, selectedIds, toggle }
}

export { useFilterIngredients }
