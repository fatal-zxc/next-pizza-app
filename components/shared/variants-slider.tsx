import React from 'react'

import { cn } from '@/lib/utils'

interface Props {
  className?: string
  items: readonly Variant[]
  onClick?: (value: Variant['value']) => void
  selectedValue?: Variant['value']
}

interface Variant {
  name: string
  value: string
  disabled?: boolean
}

const VariantsSlider: React.FC<Props> = ({ className, items, onClick, selectedValue }) => {
  return (
    <div className={cn('flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none', className)}>
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            'flex items-center justify-center h-[30px] px-5 flex-1 rounded-3xl transition-all duration-500 text-sm',
            {
              'bg-white shadow': item.value === selectedValue,
              'text-gray-500 opacity-50 pointer-events-none': item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default VariantsSlider
