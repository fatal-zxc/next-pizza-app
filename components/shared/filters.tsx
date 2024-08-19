import { cn } from '@/lib/utils'
import React from 'react'

import { Title, FilterCheckbox, CheckboxFiltersGroup } from './index'
import { Input, RangeSlider } from '../ui'

interface Props {
  className?: string
}

const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <Title text='Фильтры' size='sm' className='mb-5 font-bold' />
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='0' />
        <FilterCheckbox text='Новинки' value='1' />
      </div>
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <b className='mb-3'>Цена от и до:</b>
        <div className='flex gap-3 mb-5'>
          <Input type='number' min={0} max={1500} defaultValue={0} />
          <Input type='number' min={200} max={1500} defaultValue={1500} />
        </div>
        <RangeSlider min={100} max={1500} step={10} value={[0, 1500]}/>
      </div>
      <CheckboxFiltersGroup
        title='Ингредиенты'
        className='mt-5'
        limit={6}
        defaultItems={[
          {
            text: 'Сырный соус',
            value: '0'
          },
          {
            text: 'Моццарелла',
            value: '1'
          },
          {
            text: 'Чеснок',
            value: '2'
          },
          {
            text: 'Солённые огурчики',
            value: '3'
          },
          {
            text: 'Красный лук',
            value: '4'
          },
          {
            text: 'Томаты',
            value: '5'
          },
        ]}
        items={[
          {
            text: 'Сырный соус',
            value: '0'
          },
          {
            text: 'Моццарелла',
            value: '1'
          },
          {
            text: 'Чеснок',
            value: '2'
          },
          {
            text: 'Солённые огурчики',
            value: '3'
          },
          {
            text: 'Красный лук',
            value: '4'
          },
          {
            text: 'Томаты',
            value: '5'
          },
          {
            text: 'Сырный соус',
            value: '6'
          },
          {
            text: 'Моццарелла',
            value: '7'
          },
          {
            text: 'Чеснок',
            value: '8'
          },
          {
            text: 'Солённые огурчики',
            value: '9'
          },
          {
            text: 'Красный лук',
            value: '10'
          },
          {
            text: 'Томаты',
            value: '11'
          },
        ]}
      />
    </div>
  )
}

export default Filters