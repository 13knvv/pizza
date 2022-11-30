import { useEffect, useState } from 'react'

const Sort = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string>('по пулярности')

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
      Сортировка по:
      <span onClick={onClickByList} className="sort__by">
        {sortBy}
      </span>
      {isOpenPopUp && (
        <ul className="sort__byList">
          <li
            className={
              sortBy === 'по пулярности'
                ? 'sort__byItem sort__byItem--active'
                : 'sort__byItem'
            }
            onClick={() => onClickByItem('по пулярности')}
          >
            по пулярности
          </li>
          <li
            className={
              sortBy === 'по цене'
                ? 'sort__byItem sort__byItem--active'
                : 'sort__byItem'
            }
            onClick={() => onClickByItem('по цене')}
          >
            по цене
          </li>
          <li
            className={
              sortBy === 'по алфавиту'
                ? 'sort__byItem sort__byItem--active'
                : 'sort__byItem'
            }
            onClick={() => onClickByItem('по алфавиту')}
          >
            по алфавиту
          </li>
        </ul>
      )}
    </div>
  )
}

export default Sort
