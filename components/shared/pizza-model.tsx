'use client'

import React, { useEffect, useState } from 'react'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'

import { IProduct } from '@/store/products'
import { cn } from '@/lib/utils'
import { Button } from '../ui'
import { VariantsSlider, ProductImage, Title } from './index'

interface Props {
  className?: string
  pizza: IProduct
  onClickAdd?: VoidFunction
}

const PizzaModel: React.FC<Props> = ({ className, pizza }) => {
  const [size, setSize] = useState<number>(25)
  const [type, setType] = useState<string>('TRADITIONAL')
  const [ingredientsPrice, setIngredientsPrice] = useState<number>(0)
  const [price, setPrice] = useState<number>(pizza.productVariant[0].price)
  const [activeIngredients] = useState(new Set<number>())

  useEffect(() => {
    setPrice(
      pizza.productVariant[(type === 'TRADITIONAL' ? 0 : 3) + size / 5 - 5 - (type === 'THIN' ? 1 : 0)].price +
        ingredientsPrice
    )
  }, [size, type, pizza.productVariant, ingredientsPrice])

  const handleSize = (size: string) => {
    if (size === '25') {
      setType('TRADITIONAL')
      setSize(Number(size))
    } else setSize(Number(size))
  }

  const handleIngredient = (id: number, price: number) => {
    if (activeIngredients.has(id)) {
      activeIngredients.delete(id)
      setIngredientsPrice((prevPrice) => prevPrice - price)
    } else {
      activeIngredients.add(id)
      setIngredientsPrice((prevPrice) => prevPrice + price)
    }
  }

  return (
    <div className={cn('flex flex-1 items-center', className)}>
      <ProductImage
        imageUrl={pizza.imageUrl}
        imageAlt={pizza.name}
        size={size}
      />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title
          text={pizza.name}
          size="md"
          className="font-extrabold mb-1"
        />
        <p className="text-gray-400 mb-1">
          {size} см, {type === 'THIN' ? 'тонкое' : 'традиционное'} тесто {size}, 880 г
        </p>
        <VariantsSlider
          className="mb-1"
          items={[
            { name: 'Маленькая', value: '25' },
            { name: 'Средняя', value: '30' },
            { name: 'Большая', value: '35' },
          ]}
          selectedValue={String(size)}
          onClick={handleSize}
        />
        <VariantsSlider
          className="mb-5"
          items={[
            { name: 'Традиционное', value: 'TRADITIONAL' },
            { name: 'Тонкое', value: 'THIN', disabled: size === 25 },
          ]}
          selectedValue={type}
          onClick={(type) => setType(type)}
        />
        <p className="font-bold text-xl mb-3">Добавить по вкусу</p>
        <div className="rounded-md h-[300px] overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-3">
            {pizza.ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                onClick={() => handleIngredient(ingredient.id, ingredient.price)}
                className={cn(
                  'flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white',
                  { 'border border-primary': activeIngredients.has(ingredient.id) }
                )}
              >
                {activeIngredients.has(ingredient.id) && (
                  <CircleCheck className="absolute top-2 right-2 text-primary" />
                )}
                <Image
                  src={ingredient.imageUrl}
                  alt={ingredient.name}
                  width={110}
                  height={110}
                />
                <span className="text-sm mb-1">{ingredient.name}</span>
                <span className="font-bold">{ingredient.price} ₽</span>
              </div>
            ))}
          </div>
        </div>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-5">Добавить в корзину за {price} ₽</Button>
      </div>
    </div>
  )
}

export default PizzaModel
