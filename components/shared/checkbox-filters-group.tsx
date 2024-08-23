'use client'

import React, { useState } from 'react'

import { cn } from '@/lib/utils'
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox'
import { Input, Skeleton } from '../ui'

type Item = FilterChecboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems: Item[]
  limit?: number
  loading: boolean
  searchInputPlaceholder?: string
  onClickCheckbox: (id: number) => void
  selectedIds: Set<number>
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
  loading,
  selectedIds,
  onClickCheckbox,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInput = (value: string) => {
    setSearchValue(value)
  }

  const loader = (
    <div className="">
      <b className="mb-3">{title}</b>
      {...Array(limit)
        .fill(0)
        .map((_, i) => (
          <Skeleton
            key={i}
            className="mt-5 h-6 rounded-[8px]"
          />
        ))}
    </div>
  )

  const renderItems = showAll ? items.filter((item) => item.name.includes(searchValue)) : defaultItems.slice(0, limit)

  const main = (
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
            onCheckedChange={() => onClickCheckbox(item.id)}
            checked={selectedIds.has(item.id)}
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

  return loading ? loader : main
}

export default CheckboxFiltersGroup
