'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import useCategoryStore from '@/store/category'

interface Props {
  className?: string
}

const categoriesData = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли' , 'Кофе', 'Напитки', 'Десерты']

const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore(state => state.activeId)
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categoriesData.map((cat, ix) => (
        <a key={ix} className={cn(
          'flex items-center font-bold h-11 rounded-2xl px-5',
          categoryActiveId === ix && 'bg-white shadow-md shadow-gray-200 text-primary'
        )} href={`/#${cat}`}>
          <button>{cat}</button>
        </a>
      ))}
    </div>
  )
}

export default Categories