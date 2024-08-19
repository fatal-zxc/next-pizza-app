import { Title, TopBar, Filters, ProductsGroupList } from "@/components/shared"

export default function Home() {
  return (
  <main className="mt-10">
    <Title text="Все пиццы" size="lg" className="font-extrabold px-[10%]" />
    <TopBar />
    <div className="flex gap-[80px] pb-14 px-[10%] mt-10">
      <Filters />
      <div className="flex-1">
        <div className="flex flex-col gap-16">
          <ProductsGroupList title='Пиццы' products={[
            {
              id: 1,
              name: 'Сырный цыпленок',
              imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif',
              items: [{ price: 529 }]
            },
            {
              id: 2,
              name: 'Диабло',
              imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
              items: [{ price: 449 }]
            },
            {
              id: 3,
              name: 'Бургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
              items: [{ price: 459 }]
            },
            {
              id: 4,
              name: 'Сырный цыпленок',
              imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif',
              items: [{ price: 529 }]
            },
            {
              id: 5,
              name: 'Диабло',
              imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
              items: [{ price: 449 }]
            },
            {
              id: 6,
              name: 'Бургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
              items: [{ price: 459 }]
            },
          ]} categoryId={0} />
          <ProductsGroupList title='Комбо' products={[
            {
              id: 1,
              name: 'Сырный цыпленок',
              imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif',
              items: [{ price: 529 }]
            },
            {
              id: 2,
              name: 'Диабло',
              imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
              items: [{ price: 449 }]
            },
            {
              id: 3,
              name: 'Бургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
              items: [{ price: 459 }]
            },
            {
              id: 4,
              name: 'Сырный цыпленок',
              imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif',
              items: [{ price: 529 }]
            },
            {
              id: 5,
              name: 'Диабло',
              imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
              items: [{ price: 449 }]
            },
            {
              id: 6,
              name: 'Бургер-пицца',
              imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
              items: [{ price: 459 }]
            },
          ]} categoryId={1} />
        </div>
      </div>
    </div>
  </main>
  )
}
