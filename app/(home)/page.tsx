'use client'
import { Title, TopBar, Filters, ProductsGroupList } from "@/components/shared"
import useGetCategory from "@/hooks/useGetCategory"

export default function Home() {
  const {categories, isLoading} = useGetCategory()
  
  return (
  <main className="mt-10">
    <Title text="Все пиццы" size="lg" className="font-extrabold px-[5%]" />
    <TopBar />
    <div className="flex gap-[50px] pb-14 px-[5%] mt-10">
      <Filters />
      <div className="flex-1">
        <div className="flex flex-col gap-16">
          {!isLoading && categories.map((category) => (
            <ProductsGroupList key={category.id} categoryId={category.id} title={category.name} products={category.products} />
          ))}
        </div>
      </div>
    </div>
  </main>
  )
}
