import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Button.module.sass'

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  className?: string
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({ className, children, ...props }) => {
  return (
    <button className={clsx(styles.button, className && styles[className])} {...props}>
      {children}
    </button>
  )
}
export default Button
