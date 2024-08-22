import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

import { getAllIngredients } from "@/services/pizza-service";

type IngredientItem = Pick<Ingredient, 'id' | 'name'>

const useFilterIngredients = (): IngredientItem[] => {
  const [ingredients, setIngredients] = useState<IngredientItem[]>([])

  useEffect(() => {
    getAllIngredients().then((data) => {
      setIngredients(data.map((ingredient) => ({ id: ingredient.id, name: ingredient.name})))
    }).catch((e) => {
      console.log(e)
    })
  }, [])

  return ingredients
}

export { useFilterIngredients }