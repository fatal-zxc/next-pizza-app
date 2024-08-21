import { cn } from '@/lib/utils'
import React from 'react'

import { Categories, SortPopup } from '@/components/shared'

interface Props {
  className?: string
}

const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex justify-between items-center sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10 px-[10%]',
        className
      )}
    >
      <Categories />
      <SortPopup />
    </div>
  )
}

export default TopBar
