import { FC } from 'react'
import Link from 'next/link'

import Logo from '@/assets/DRIVERAVE.svg'
import Menu from './Menu'
import Navigation from './Navigation'

const Header: FC = () => {
  return (
    <>
      <header className='flex items-center justify-between py-[30px] px-10 md:px-6'>
        <div className='flex items-center gap-16 md:gap-6 sm:flex-col'>
          <Link href='/'>
            <Logo />
          </Link>

          <Navigation />
        </div>

        <Menu />
      </header>
    </>
  )
}
export default Header
