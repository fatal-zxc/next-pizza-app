'use client'

import { cn } from '@/lib/utils'
import React, { useState } from 'react'

import { Title, FilterCheckbox, CheckboxFiltersGroup } from './index'
import { Input, RangeSlider } from '../ui'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'

interface Props {
  className?: string
}

type PriceRange = {
  priceFrom: number
  priceTo: number
}

const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, selectedIds, toggle } = useFilterIngredients()
  const [price, setPrice] = useState<PriceRange>({ priceFrom: 0, priceTo: 1500 })

  const handlerPrice = (priceFrom: number, priceTo: number) => {
    setPrice({ priceFrom, priceTo })
  }

  return (
    <div className={cn('w-[245px]', className)}>
      <Title
        text="Фильтры"
        size="sm"
        className="font-bold"
      />
      {/* <div className="flex flex-col gap-4">
        <FilterCheckbox
          name="Можно собирать"
          id={-1}
        />
        <FilterCheckbox
          name="Новинки"
          id={-2}
        />
      </div> */}
      <div className="mt-3 border-y border-y-neutral-100 py-6 pb-7">
        <b className="mb-3">Цена от и до:</b>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            min={0}
            max={1500}
            step={10}
            value={price.priceFrom}
            onChange={(e) => handlerPrice(Number(e.target.value), price.priceTo)}
          />
          <Input
            type="number"
            min={200}
            max={1500}
            step={10}
            value={price.priceTo}
            onChange={(e) => handlerPrice(price.priceFrom, Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1500}
          minStepsBetweenThumbs={20}
          step={10}
          value={[price.priceFrom, price.priceTo]}
          onValueChange={([from, to]) => to >= 200 && handlerPrice(from, to)}
        />
      </div>
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        loading={loading}
        defaultItems={ingredients.slice(0, 6)}
        items={ingredients}
        onClickCheckbox={toggle}
        selectedIds={selectedIds}
      />
    </div>
  )
}

export default Filters
