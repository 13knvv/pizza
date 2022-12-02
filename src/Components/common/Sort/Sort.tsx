import { useEffect, useState } from 'react'

const Sort = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string>('популярности')

  useEffect(() => {
    document.addEventListener('click', onClickOutSide)
    return () => document.removeEventListener('click', onClickOutSide)
  }, [])

  const onClickOutSide = (e: any) => {
    if (
      e.target.className != 'sort__by' &&
      e.target.className != 'sort__byList' &&
      e.target.className != 'sort__byItem'
    ) {
      setIsOpenPopUp(false)
    }
  }

  const onClickByList = () => {
    setIsOpenPopUp((isOpenPopUp) => !isOpenPopUp)
  }

  const onClickByItem = (by: string) => {
    setIsOpenPopUp(false)
    setSortBy(by)
  }

  return (
    <div className="sort">
      <span className='sort__by-title'>Сортировка по:</span>
      <span onClick={onClickByList} className="sort__by">
        {sortBy}
        {isOpenPopUp && (
          <ul className="sort__byList">
            <li
              className={
                sortBy === 'популярности'
                  ? 'sort__byItem sort__byItem--active'
                  : 'sort__byItem'
              }
              onClick={() => onClickByItem('популярности')}
            >
              популярности
            </li>
            <li
              className={
                sortBy === 'цене'
                  ? 'sort__byItem sort__byItem--active'
                  : 'sort__byItem'
              }
              onClick={() => onClickByItem('цене')}
            >
              цене
            </li>
            <li
              className={
                sortBy === 'алфавиту'
                  ? 'sort__byItem sort__byItem--active'
                  : 'sort__byItem'
              }
              onClick={() => onClickByItem('алфавиту')}
            >
              алфавиту
            </li>
          </ul>
        )}
      </span>
    </div>
  )
}

export default Sort
