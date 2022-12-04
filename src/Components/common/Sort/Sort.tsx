import { useEffect, useState } from 'react'

const Sort = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<number>(0)
  const sortByArray = ['популярности', 'цене', 'алфавиту']

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

  const onClickByItem = (byIndex: number) => {
    setIsOpenPopUp(false)
    setSortBy(byIndex)
  }

  const listBy = sortByArray.map((item, index) => {
    return (
      <li
        key={index}
        className={
          sortBy === index
            ? 'sort__byItem sort__byItem--active'
            : 'sort__byItem'
        }
        onClick={() => onClickByItem(index)}
      >
        {item}
      </li>
    )
  })

  return (
    <div className="sort">
      <span className="sort__by-title">Сортировка по:</span>
      <span onClick={onClickByList} className="sort__by">
        {sortByArray[sortBy]}
        {isOpenPopUp && <ul className="sort__byList">{listBy}</ul>}
      </span>
    </div>
  )
}

export default Sort
