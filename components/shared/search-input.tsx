import React from 'react'

import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

const SearchInput: React.FC<Props> = ({ className }) => {
  return <div className={cn('flex justify-between rounded-2xl flex-1 relative h-11', className)}></div>
}

export default SearchInput
