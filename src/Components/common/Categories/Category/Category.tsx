interface ICategoryProps {
  handleClickCategory: (category: number) => void
  name: string
  activeCategory: number
  index: number
}

const Category = (props: ICategoryProps) => {
  const { name, activeCategory, index, handleClickCategory } = props
  
  return (
    <button
      className={
        activeCategory === index ? 'category category--active' : 'category'
      }
      onClick={() => handleClickCategory(index)}
    >
      {name}
    </button>
  )
}

export default Category
