'use client'

import { cn } from '@/lib/utils'
import React, { useState } from 'react'

import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui'

type Item = FilterChecboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems: Item[]
  limit?: number
  searchInputPlaceholder?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
  className?: string
}

const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInput = (value: string) => {
    setSearchValue(value)
  }

  const renderItems = showAll
    ? items.filter((item) => item.name.includes(searchValue))
    : defaultItems.slice(0, limit)

  return (
    <div className={cn('', className)}>
      <b className="mb-3">{title}</b>
      {showAll && (
        <Input
          onChange={(e) => handleSearchInput(e.target.value)}
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none mt-3"
        />
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 mt-5 overflow-auto scrollbar">
        {renderItems.map((item, i) => (
          <FilterCheckbox
            onCheckedChange={(ids) => console.log(ids)}
            checked={false}
            key={i}
            id={item.id}
            name={item.name}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>
      {items.length > limit && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-primary mt-3"
        >
          {showAll ? 'Скрыть' : 'Показать все'}
        </button>
      )}
    </div>
  )
}

export default CheckboxFiltersGroup
