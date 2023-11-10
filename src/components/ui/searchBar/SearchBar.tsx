'use client'
import { FC, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import SearchInput from '../searchInput/SearchInput'
import Calendar from '../calendar/Calendar'
import Button from '../Button/Button'
import Search from '@/assets/Search.svg'
import SecondSearch from '@/assets/Search2.svg'

import styles from './SearchBar.module.sass'
import { formatDate } from '@/utils/date'

const SearchBar: FC = () => {
  const searchBarRef = useRef<HTMLDivElement>(null)
  const [calendarFirstOpen, setCalendarFirstOpen] = useState(false)
  const [selectedDateFirst, setSelectedDayFirst] = useState(new Date())

  const [calendarSecondOpen, setCalendarSecondOpen] = useState(false)
  const [selectedDateSecond, setSelectedDaySecond] = useState(new Date())

  useEffect(() => {
    if (!calendarFirstOpen && !calendarSecondOpen) return
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [calendarFirstOpen, calendarSecondOpen])

  const handleClick = (e: MouseEvent) => {
    if (!searchBarRef.current) return
    if (!searchBarRef.current.contains(e.target as Node)) {
      setCalendarFirstOpen(false)
      setCalendarSecondOpen(false)
    }
  }

  return (
    <div ref={searchBarRef} className='relative'>
      <div className={clsx(styles.searchbar, 'z-10')}>
        <SearchInput title='Город или адрес' placeholder='Куда едем' type='text' />

        <SearchInput
          showCalendar={() => {
            setCalendarSecondOpen(false)
            setCalendarFirstOpen(true)
          }}
          hideCalendar={() => setCalendarFirstOpen(false)}
          className='desktop_input'
          title='Заезд'
          placeholder='Когда'
          type='text'
          value={formatDate(selectedDateFirst, 'DD MMM YYYY')}
        />

        <SearchInput
          showCalendar={() => {
            setCalendarSecondOpen(true)
            setCalendarFirstOpen(false)
          }}
          hideCalendar={() => setCalendarSecondOpen(false)}
          className='desktop_input'
          title='Заезд'
          placeholder='Когда'
          type='text'
          value={formatDate(selectedDateSecond, 'DD MMM YYYY')}
        />

        <div className={styles.mobile_date_wrapper}>
          <SearchInput
            showCalendar={() => {
              setCalendarSecondOpen(false)
              setCalendarFirstOpen(true)
            }}
            hideCalendar={() => setCalendarFirstOpen(false)}
            className='mobile_date'
            title='Заезд'
            placeholder='Когда'
            type='text'
            value={formatDate(selectedDateFirst, 'DDD DD MMM YYYY')}
          />

          <SearchInput
            showCalendar={() => {
              setCalendarSecondOpen(true)
              setCalendarFirstOpen(false)
            }}
            hideCalendar={() => setCalendarSecondOpen(false)}
            className='mobile_date'
            title='Заезд'
            placeholder='Когда'
            type='text'
            value={formatDate(selectedDateSecond, 'DDD DD MMM YYYY')}
          />
        </div>

        <SearchInput title='Гости' placeholder='без детей' type='text' />
        <button className='absolute sm:hidden right-[5px]'>
          <Search />
        </button>
        <Button className='mobile_btn'>
          <SecondSearch className='inline-block mx-2' />
          <span>Поиск</span>
        </Button>
      </div>
      {calendarFirstOpen && (
        <div className='absolute top-0 left-0 right-0 bg-white z-0 sm:z-20 rounded-[20px] shadow-xl pb-14'>
          <div className='mt-[100px]'>
            <Calendar
              selectedDate={selectedDateFirst}
              selectDate={date => {
                setSelectedDayFirst(date)
                setCalendarFirstOpen(false)
              }}
            />
          </div>
        </div>
      )}
      {calendarSecondOpen && (
        <div className='absolute top-0 left-0 right-0 bg-white z-0 sm:z-20 rounded-[20px] shadow-xl pb-14'>
          <div className='mt-[100px] sm:mt-5'>
            <Calendar
              selectedDate={selectedDateSecond}
              selectDate={date => {
                setSelectedDaySecond(date)
                setCalendarSecondOpen(false)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
export default SearchBar
