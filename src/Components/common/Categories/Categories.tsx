import { useState } from "react"
import Category from "./Category/Category"

const categories = [
  'Все',
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
]

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0)

  const handleClickCategory = (category: number) => {
    setActiveCategory(category)
  }
  const categoryComponents = categories.map((item, index) => {
    return (
      <Category
        key={item}
        handleClickCategory={handleClickCategory}
        name={item}
        activeCategory={activeCategory}
        index={index}
      />
    )
  })

  return <div className="categories">{categoryComponents}</div>
}

export default Categories