import { Header } from '@/components/shared'

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <>
      <Header className="px-[5%]" />
      {children}
      {modal}
    </>
  )
}
