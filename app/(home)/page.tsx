'use client'
import { Title, TopBar, Filters, ProductsGroupList } from '@/components/shared'
import useGetCategory from '@/hooks/useGetCategory'
import useCartStore from '@/store/cart'

export default function Home() {
  const { categories, isLoading } = useGetCategory()
  const { cart, cartItemsMap } = useCartStore()
  return (
    <main className="mt-10">
      <Title
        text="Все пиццы"
        size="lg"
        className="font-extrabold px-[5%]"
      />
      <TopBar />
      <div className="flex gap-[50px] pb-14 px-[5%] mt-10">
        <Filters />
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            {!isLoading &&
              categories.map((category) => (
                <ProductsGroupList
                  key={category.id}
                  categoryId={category.id}
                  title={category.name}
                  products={category.products}
                  cartId={cart?.id}
                  cartItemsMap={cartItemsMap}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
