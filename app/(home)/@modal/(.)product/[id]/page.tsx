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

  const main =
    product &&
    (product.categoryId === 2 ? (
      <PizzaModel
        pizza={product}
        router={router}
      />
    ) : (
      <ProductModel product={product} />
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
