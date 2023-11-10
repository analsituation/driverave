import { FC } from 'react'
import styles from './SearchInput.module.sass'
import clsx from 'clsx'

interface SearchInputProps {
  title: string
  placeholder: string
  type: 'text'
  className?: string
  value?: string
  showCalendar?: () => void
  hideCalendar?: () => void
}

const SearchInput: FC<SearchInputProps> = ({
  title,
  placeholder,
  type,
  showCalendar,
  hideCalendar,
  value,
  className
}) => {
  return (
    <label className={clsx(styles.label, className && styles[className])}>
      <span className={styles.label_name}>{title}</span>
      <input
        onFocus={showCalendar}
        // onBlur={hideCalendar}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value ? value : ''}
      />
    </label>
  )
}
export default SearchInput
