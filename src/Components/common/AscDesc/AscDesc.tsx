import { useDispatch, useSelector } from 'react-redux'
import { setAscDesc } from '../../../Redux/filterSlice'
import { RootState } from '../../../Redux/store'
import desc from './svg/sort_down.svg'
import asc from './svg/sort_up.svg'

const AscDesc = () => {
  const dispatch = useDispatch()
  const ascDesc = useSelector((state: RootState) => state.filter.ascDesc)

  const onClick = () => {
    const ascOrDesc = ascDesc === 'asc' ? 'desc' : 'asc'
    dispatch(setAscDesc(ascOrDesc))
  }

  return (
    <div onClick={onClick}>
      {ascDesc === 'asc' ?  <img src={asc} alt="" /> : <img src={desc} alt="" />}
    </div>
  )
}

export default AscDesc
