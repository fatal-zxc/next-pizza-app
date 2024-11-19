import { create } from 'zustand'
import { Ingredient } from '@prisma/client'

interface State {
  ingredientsData: Ingredient[]
  selectedIds: Set<number>
  setSelectedIds: (ingredientsId: Set<number>) => void
  setIngredientsData: (ingredients: Ingredient[]) => void
}

const useIngedientsStore = create<State>((set) => ({
  ingredientsData: [],
  selectedIds: new Set<number>(),
  setSelectedIds: (ingredientsId: Set<number>) => set({ selectedIds: ingredientsId }),
  setIngredientsData: (ingredients: Ingredient[]) => set({ ingredientsData: ingredients }),
}))

export default useIngedientsStore
