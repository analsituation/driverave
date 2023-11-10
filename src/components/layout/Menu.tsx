'use client'
import { FC, useState } from 'react'
import MenuButton from '../ui/menuButton/MenuButton'
import CloseBtn from '@/assets/Close.svg'
import AuthForm from '../ui/authForm/AuthForm'
import clsx from 'clsx'

import styles from './Menu.module.sass'

const Menu: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <MenuButton isOpen={menuOpen} setIsOpen={() => setMenuOpen(!menuOpen)} />
      <div className={clsx(styles.menu_wrapper, menuOpen && styles.active)}>
        <div className={styles.menu}>
          <span className='absolute top-[30px] right-[30px] cursor-pointer'>
            <CloseBtn onClick={() => setMenuOpen(!menuOpen)} />
          </span>
          <AuthForm />
        </div>
      </div>
      <div
        className={clsx(styles.overlay, menuOpen && styles.overlay_open, !menuOpen && styles.overlay_hidden)}
        onClick={() => setMenuOpen(false)}
      ></div>
    </>
  )
}
export default Menu
