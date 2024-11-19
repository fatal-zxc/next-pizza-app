import React, { MouseEvent } from 'react'

import { cn } from '@/lib/utils'
import CountIconButton from './count-icon-button'

export interface CountButtonProps {
  value?: number
  size?: 'sm' | 'lg'
  onClick?: (type: 'plus' | 'minus') => void
  isLoading?: boolean
  isPreventDefault?: boolean
  className?: string
}

const CountButton: React.FC<CountButtonProps> = ({
  className,
  onClick,
  value = 1,
  size = 'sm',
  isLoading,
  isPreventDefault,
}) => {
  const handleMinusButton = (e: MouseEvent) => {
    if (isPreventDefault) e.preventDefault()
    return onClick?.('minus')
  }

  const handlePlusButton = (e: MouseEvent) => {
    if (isPreventDefault) e.preventDefault()
    return onClick?.('plus')
  }

  return (
    <div className={cn('inline-flex items-center justify-between gap-3', className)}>
      <CountIconButton
        onClick={handleMinusButton}
        disabled={value === 1 || isLoading}
        size={size}
        type="minus"
      />

      <b className={size === 'sm' ? 'text-sm' : 'text-md'}>{value}</b>

      <CountIconButton
        onClick={handlePlusButton}
        size={size}
        disabled={isLoading}
        type="plus"
      />
    </div>
  )
}

export default CountButton
