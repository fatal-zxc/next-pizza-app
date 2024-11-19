'use client'

import React, { useMemo, useState } from 'react'
import { debounce } from 'lodash'

import { cn } from '@/lib/utils'
import { Title, CheckboxFiltersGroup } from './index'
import { Input, RangeSlider } from '../ui'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import useFiltersStore from '@/store/filters'

interface Props {
  className?: string
}

const Filters: React.FC<Props> = ({ className }) => {
  const { ingredientsData, isLoading, selectedIds, toggle } = useFilterIngredients()
  const { priceFrom, priceTo, setPrice } = useFiltersStore()

  const [localPriceFrom, setLocalPriceFrom] = useState(0)
  const [localPriceTo, setLocalPriceTo] = useState(1500)

  const handlerPrice = (priceFrom: number, priceTo: number) => {
    setLocalPriceFrom(priceFrom)
    setLocalPriceTo(priceTo)
    debouncedStorePrice(priceFrom, priceTo)
  }

  const debouncedStorePrice = useMemo(
    () =>
      debounce((priceFrom, priceTo) => {
        console.log(priceFrom, priceTo)
        setPrice(priceFrom, priceTo)
      }, 200),
    [setPrice]
  )

  return (
    <div className={cn('w-[245px]', className)}>
      <Title
        text="Фильтры"
        size="sm"
        className="font-bold"
      />
      <div className="mt-3 border-y border-y-neutral-100 py-6 pb-7">
        <b className="mb-3">Цена от и до:</b>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            min={0}
            max={1500}
            step={10}
            value={localPriceFrom}
            onChange={(e) => handlerPrice(Number(e.target.value), priceTo)}
          />
          <Input
            type="number"
            min={200}
            max={1500}
            step={10}
            value={localPriceTo}
            onChange={(e) => handlerPrice(priceFrom, Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1500}
          minStepsBetweenThumbs={20}
          step={10}
          value={[localPriceFrom, localPriceTo]}
          onValueChange={([from, to]) => to >= 200 && handlerPrice(from, to)}
        />
      </div>
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        loading={isLoading}
        defaultItems={ingredientsData.slice(0, 6)}
        items={ingredientsData}
        onClickCheckbox={toggle}
        selectedIds={selectedIds}
      />
    </div>
  )
}

export default Filters
