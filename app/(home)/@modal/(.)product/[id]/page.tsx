'use client'

import { notFound } from 'next/navigation'
import { useRouter } from 'next/navigation'

import useGetProductById from '@/hooks/useGetProductById'
import { PizzaModel, ProductModel } from '@/components/shared'
import { Dialog } from '@/components/ui'
import { DialogContent, DialogTitle } from '@/components/ui/dialog'

export default function ProductModalPage({ params: { id } }: { params: { id: string } }) {
  const router = useRouter()
  const { product, isLoading, isError } = useGetProductById(Number(id))

  if (isError) {
    return notFound()
  }

  const notify = async () => {
    const { toast } = await import('react-hot-toast')
    toast.success('Товар добавлен в корзину!')
    router.back()
  }

  const main =
    product &&
    (product.categoryId === 2 ? (
      <PizzaModel
        pizza={product}
        notify={notify}
      />
    ) : (
      <ProductModel
        product={product}
        notify={notify}
      />
    ))

  return (
    <Dialog
      open
      onOpenChange={router.back}
    >
      <DialogContent
        aria-describedby={`content for product: ${id}`}
        className="p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden"
      >
        <DialogTitle hidden />
        {main}
      </DialogContent>
    </Dialog>
  )
}
