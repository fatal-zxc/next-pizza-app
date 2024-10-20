'use client'
import { FC } from 'react'

import { cn } from '@/lib/utils'
import useCategoryStore from '@/store/category'

interface Props {
  className?: string
}

const Categories: FC<Props> = ({ className }) => {
  const { categoryActiveId, categories } = useCategoryStore((state) => ({
    categoryActiveId: state.activeId,
    categories: state.categoryData,
  }))
  const categoriesNames = categories.map((category) => category.name)

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categoriesNames.map((cat, ix) => (
        <a
          key={ix}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === ix + 1 && 'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          href={`/#${cat}`}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  )
}

export default Categories
