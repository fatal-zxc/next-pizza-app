'use client'

import { notFound } from 'next/navigation'

import useGetProductById from '@/hooks/useGetProductById'
import { ProductImage, Title, VariantsSlider } from '@/components/shared'

export default function ProductPage({ params: { id } }: { params: { id: string } }) {
  const { product, isLoading, isError } = useGetProductById(Number(id))

  if (isError) {
    return notFound()
  }

  const main = product && (
    <div className='flex flex-col my-10 px-[5%]'>
      <div className='flex flex-1'>
        <ProductImage imageUrl={product.imageUrl} imageAlt={product.name} size={25} />
        <div className='w-[490px] bg-[#FCFCFC] p-7'>
          <Title text={product.name} size='md' className='font-extrabold mb-1' />
          <p className='text-gray-400'>123</p>
          <VariantsSlider items={[{name: 'Маленькая', value: '1'}, {name: 'Средняя', value: '2'}, {name: 'Большая', value: '3'}]} selectedValue='1' />
        </div>
      </div>
    </div>
  )

  return (
    !isLoading && main
  )
}