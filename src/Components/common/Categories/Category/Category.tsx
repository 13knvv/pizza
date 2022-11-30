interface ICategoryProps {
  handleClickCategory: (category: string) => void
  name: string
  activeCategory: string
}

const Category = (props: ICategoryProps) => {
  const { name, activeCategory, handleClickCategory } = props

  const onClick = () => {
    handleClickCategory(name)
  }

  return (
    <button
      className={
        activeCategory === name ? 'category category--active' : 'category'
      }
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default Category
