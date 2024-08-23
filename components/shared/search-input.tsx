'use client'

import { useState, FC } from 'react'
import { Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useDebounce } from 'react-use'

import { cn } from '@/lib/utils'
import { productsSearch } from '@/services/pizza-service'
import { Product } from '@prisma/client'

interface Props {
  className?: string
}

const SearchInput: FC<Props> = ({ className }) => {
  const [focused, setFocused] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [products, setProducts] = useState<Product[]>([])

  useDebounce(
    async () => {
      try {
        const data = await productsSearch(searchText)
        setProducts(data)
      } catch (e) {
        console.log(e)
      }
    },
    300,
    [searchText]
  )

  const searchHandler = (text: string) => {
    setSearchText(text)
  }

  const productHandler = () => {
    setFocused(false)
    setSearchText('')
  }

  return (
    <>
      {focused && (
        <div
          className="fixed top-0 bottom-0 right-0 left-0 bg-black/50 z-20"
          onClick={() => setFocused(false)}
        />
      )}
      <div className={cn('flex justify-between rounded-2xl flex-1 relative h-11 z-30', className)}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-50 pl-11"
          type="text"
          placeholder="Поиск..."
          onFocus={() => setFocused(true)}
          value={searchText}
          onChange={(e) => searchHandler(e.target.value)}
        />
        {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-12'
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10"
                href={`/product/${product.id}`}
                onClick={productHandler}
              >
                <Image
                  width={32}
                  height={32}
                  src={product.imageUrl}
                  alt={product.name}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default SearchInput
