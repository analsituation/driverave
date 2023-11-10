'use client'
import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const Navigation: FC = () => {
  const pathname = usePathname()
  return (
    <div className='flex items-center gap-10 md:gap-4'>
      <Link
        className={clsx(
          'text-xl hover:text-orange-600 transition-colors',
          pathname === '/' ? 'text-orange-600' : 'text-black'
        )}
        href='/'
      >
        Главная
      </Link>
      <Link
        className={clsx(
          'text-xl hover:text-orange-600 transition-colors',
          pathname === '/another_page' ? 'text-orange-600' : 'text-black'
        )}
        href='/another_page'
      >
        Страница 2
      </Link>
    </div>
  )
}
export default Navigation
