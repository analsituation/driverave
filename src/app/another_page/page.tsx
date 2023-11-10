import localFont from 'next/font/local'
import clsx from 'clsx'

import styles from './page.module.sass'

const ceraPro = localFont({
  src: [
    {
      path: '../../assets/fonts/CeraPro-Regular.woff',
      weight: '400',
      style: 'normal'
    },

    {
      path: '../../assets/fonts/CeraPro-Bold.woff',
      weight: '700',
      style: 'normal'
    }
  ]
})

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(ceraPro.className, 'flex flex-col gap-10 text-white w-1/2 lg:w-full')}>
        <p className='text-lg'>Это другая страница</p>
        <h1 className='text-[70px] sm:text-[36px] leading-[75px] font-bold'>Это другая страница</h1>
        <h3 className='text-2xl'>Это другая страница</h3>
      </div>
    </div>
  )
}
