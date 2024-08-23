import React, { ButtonHTMLAttributes } from 'react'
import { Checkbox } from '../ui/checkbox'

export interface FilterChecboxProps {
  name: string
  id: number
  endAdornment?: React.ReactNode
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({ name, id, endAdornment, onCheckedChange, checked }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={id}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(id)}`}
      />
      <label
        htmlFor={`checkbox-${String(id)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {name}
      </label>
      {endAdornment}
    </div>
  )
}
