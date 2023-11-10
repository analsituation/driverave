import { InputHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Input.module.sass'

interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string
}

const Input: FC<IInputProps> = ({ className, children, ...props }) => {
  return <input className={clsx(styles.input, className && styles[className])} {...props} />
}
export default Input
