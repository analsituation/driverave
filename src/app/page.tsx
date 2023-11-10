import localFont from 'next/font/local'
import clsx from 'clsx'
import SearchBar from '@/components/ui/searchBar/SearchBar'

import styles from './page.module.sass'

const ceraPro = localFont({
  src: [
    {
      path: '../assets/fonts/CeraPro-Regular.woff',
      weight: '400',
      style: 'normal'
    },

    {
      path: '../assets/fonts/CeraPro-Bold.woff',
      weight: '700',
      style: 'normal'
    }
  ]
})

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(ceraPro.className, 'flex flex-col gap-10 text-white w-1/2 lg:w-full')}>
        <p className='text-lg'>Ut enim ad minim veniam</p>
        <h1 className='text-[70px] sm:text-[36px] leading-[75px] font-bold'>Duis aute irure dolor in reprehenderit</h1>
        <h3 className='text-2xl'>Duis aute irure dolor in reprehenderit</h3>
      </div>
      <SearchBar />
    </div>
  )
}
