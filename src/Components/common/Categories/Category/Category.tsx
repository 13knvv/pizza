import { ICategory } from "../../../../Redux/filterSlice"

interface ICategoryProps {
  handleClickCategory: (category: ICategory) => void
  category: ICategory
  activeCategory: ICategory
}

const Category = (props: ICategoryProps) => {
  const { category, activeCategory, handleClickCategory } = props
  
  return (
    <button
      className={
        activeCategory.id === category.id ? 'category category--active' : 'category'
      }
      onClick={() => handleClickCategory(category)}
    >
      {category.name}
    </button>
  )
}

export default Category
