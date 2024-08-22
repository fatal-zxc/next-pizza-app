'use client'

import { cn } from '@/lib/utils'
import React from 'react'

import { Title, FilterCheckbox, CheckboxFiltersGroup } from './index'
import { Input, RangeSlider } from '../ui'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'

interface Props {
  className?: string
}

const Filters: React.FC<Props> = ({ className }) => {
  const ingredients = useFilterIngredients()
  return (
    <div className={cn('w-[245px]', className)}>
      <Title
        text="Фильтры"
        size="sm"
        className="mb-5 font-bold"
      />
      <div className="flex flex-col gap-4">
        <FilterCheckbox
          name="Можно собирать"
          id={-1}
        />
        <FilterCheckbox
          name="Новинки"
          id={-2}
        />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <b className="mb-3">Цена от и до:</b>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            min={0}
            max={1500}
            defaultValue={0}
          />
          <Input
            type="number"
            min={200}
            max={1500}
            defaultValue={1500}
          />
        </div>
        <RangeSlider
          min={100}
          max={1500}
          step={10}
          value={[0, 1500]}
        />
      </div>
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={ingredients.slice(0, 6)}
        items={ingredients}
      />
    </div>
  )
}

export default Filters
