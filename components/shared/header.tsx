import React from 'react'
import Image from 'next/image'
import { User } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Button } from '../ui'
import { CartButton, SearchInput } from './index'

interface Props {
  className?: string
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-b flex items-center justify-between py-8', className)}>
      <Link href="/">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={35}
            height={35}
          />
          <div className="flex-col">
            <h1 className="text-2xl uppercase font-extrabold">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
          </div>
        </div>
      </Link>
      <SearchInput className="mx-10 flex-1" />
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex items-center gap-1"
        >
          <User size={16} />
          Войти
        </Button>
        <CartButton />
      </div>
    </header>
  )
}

export default Header
