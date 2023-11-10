import { FC } from 'react'
import Link from 'next/link'

import WhatsApp from '@/assets/Whatsapp.svg'
import Telegram from '@/assets/Telegram.svg'
import VK from '@/assets/VK.svg'
import Email from '@/assets/Email.svg'

import styles from './Footer.module.sass'
import Image from 'next/image'

const Footer: FC = () => {
  return (
    <footer className='flex items-center justify-between p-10 sm:px-4 sm:py-8 gap-[30px] sm:flex-col'>
      <div className='sm:w-full sm:text-center'>
        <Link href='/' className='sm:w-full'>
          <Image
            className='sm:mx-auto sm:w-[300px] h-[48px]'
            src='./DRIVERAVE.svg'
            width={189}
            height={30}
            alt='DRIVERAVE'
          />
        </Link>
        <p className='mt-4 sm:text-xs'>Аренда жилья и автомобилей от владельцев</p>
      </div>
      <div className='info_block'>
        <div className='flex items-center justify-between cursor-pointer'>
          <a href='#' className={styles.social}>
            <WhatsApp />
          </a>
          <a href='#' className={styles.social}>
            <Telegram />
          </a>
          <a href='#' className={styles.social}>
            <VK />
          </a>
          <a href='#' className={styles.social}>
            <Email />
          </a>
        </div>
        <p className='mt-[28px] sm:text-xs'>Политика конфиденциальности</p>
      </div>
    </footer>
  )
}
export default Footer
