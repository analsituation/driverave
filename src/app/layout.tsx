import type { Metadata } from 'next'
import clsx from 'clsx'

import { Roboto } from 'next/font/google'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import './globals.sass'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'DRIVERAVE',
  description: 'Аренда жилья и автомобилей от владельцев'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={clsx(roboto.className, 'flex flex-col h-[100vh] relative overflow-x-hidden')}>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
