import { FC } from 'react'
import localFont from 'next/font/local'
import clsx from 'clsx'
import styles from './AuthForm.module.sass'
import Button from '../Button/Button'
import Input from '../Input/Input'

const circe = localFont({
  src: [
    {
      path: '../../../assets/fonts/Circe-Bold.woff',
      weight: '700',
      style: 'normal'
    }
  ]
})

const AuthForm: FC = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className={clsx(circe.className, styles.title)}>Вход</div>
      <div className='flex flex-col gap-4 text-md'>
        <Input type='text' placeholder='Введите e-mail или телефон' />
        <Input type='text' placeholder='Введите пароль' />
      </div>
      <div className='flex items-center justify-between'>
        <label className={styles.checkbox}>
          <input type='checkbox' />
          <span className={styles.checkmark}></span>
          <span className={styles.remember_me}>Запомнить меня</span>
        </label>
        <span className={styles.forgot_pas}>Забыли пароль?</span>
      </div>
      <div>
        <Button>Войти</Button>
        <div className={styles.register}>
          Нет аккунта?{' '}
          <a href='#' className={styles.register_link}>
            Регистрация
          </a>
        </div>
      </div>
    </div>
  )
}
export default AuthForm
