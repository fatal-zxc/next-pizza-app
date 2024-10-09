import { create } from "zustand"

import { CategoryGet } from "@/services/pizza-service"

interface State {
  activeId: number
  categoryData: CategoryGet[]
  setActiveId: (activeId: number) => void
  setCategoryData: (categories: CategoryGet[]) => void
}

const useCategoryStore = create<State>()((set) => ({
  activeId: 1,
  categoryData: [],
  setActiveId: (activeId: number) => set({ activeId }),
  setCategoryData: (categories: CategoryGet[]) => set({ categoryData: categories })
}))

export default useCategoryStore