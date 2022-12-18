import { useDispatch, useSelector } from 'react-redux'
import { ICategory, setActiveCategory } from '../../../Redux/filterSlice'
import { RootState } from '../../../Redux/store'
import Category from './Category/Category'

const Categories = () => {
  const dispatch = useDispatch()
  const categories = useSelector( (state: RootState) => state.filter.categories)
  const activeCategory = useSelector( (state: RootState) => state.filter.activeCategory)

  const handleClickCategory = (category: ICategory) => {
    dispatch(setActiveCategory(category))
  }
  const categoryComponents = categories.map((item, index) => {
    return (
      <Category
        key={index}
        handleClickCategory={handleClickCategory}
        category={item}
        activeCategory={activeCategory}
      />
    )
  })

  return <div className="categories">{categoryComponents}</div>
}

export default Categories