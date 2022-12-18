import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ISortBy, setActiveSortBy } from '../../../Redux/filterSlice'
import { RootState } from '../../../Redux/store'

const Sort = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false)
  const dispatch = useDispatch()
  const sortByList = useSelector( (state: RootState) => state.filter.sortByList)
  const activeSortBy = useSelector( (state: RootState) => state.filter.activeSortBy)

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

  const onClickActiveSortBy = () => {
    setIsOpenPopUp((isOpenPopUp) => !isOpenPopUp)
  }

  const onClickByItem = (item: ISortBy) => {
    setIsOpenPopUp(false)
    dispatch(setActiveSortBy(item))
  }

  const listBy = sortByList.map((item, index) => {
    return (
      <li
        key={index}
        className={
          activeSortBy.id === item.id
            ? 'sort__byItem sort__byItem--active'
            : 'sort__byItem'
        }
        onClick={() => onClickByItem(item)}
      >
        {item.name}
      </li>
    )
  })

  return (
    <div className="sort">
      <span className="sort__by-title">Сортировка по:</span>
      <span onClick={onClickActiveSortBy} className="sort__by">
        {activeSortBy.name}
        {isOpenPopUp && <ul className="sort__byList">{listBy}</ul>}
      </span>
    </div>
  )
}

export default Sort
