import { FC } from 'react'

import User from '@/assets/User.svg'

import styles from './MenuButton.module.sass'
import clsx from 'clsx'

interface MenuButtonProps {
  isOpen: boolean
  setIsOpen: () => void
}

const MenuButton: FC<MenuButtonProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button className={styles.button_block} onClick={setIsOpen}>
      <div className={clsx(styles.button, isOpen && styles.open)}>
        <span></span>
        <span></span>
        <span></span>
        {/* <span></span> */}
      </div>
      <span>
        <User />
      </span>
    </button>
  )
}
export default MenuButton
