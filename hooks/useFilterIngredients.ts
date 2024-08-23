import { Ingredient } from "@prisma/client"
import { useEffect, useState } from "react"
import { useSet } from "react-use"

import { getAllIngredients } from "@/services/pizza-service"

type IngredientItem = Pick<Ingredient, 'id' | 'name'>

interface ReturnProps {
  ingredients: IngredientItem[],
  loading: boolean,
  selectedIds: Set<number>
  toggle: (id: number) => void
}

const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<IngredientItem[]>([])
  const [loading, setLoading] = useState(true)

  const [selectedIds, { toggle }] = useSet(new Set<number>([]))

  useEffect(() => {
    getAllIngredients().then((data) => {
      setIngredients(data.map((ingredient) => ({ id: ingredient.id, name: ingredient.name})))
      setLoading(false)
    }).catch((e) => {
      console.log(e)
    })
  }, [])

  return {ingredients, loading, selectedIds, toggle}
}

export { useFilterIngredients }