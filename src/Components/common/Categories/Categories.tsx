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
  const [activeCategory, setActiveCategory] = useState<string>('Все')

  const handleClickCategory = (category: string) => {
    setActiveCategory(category)
  }
  const categoryComponents = categories.map((item) => {
    return (
      <Category
        key={item}
        handleClickCategory={handleClickCategory}
        name={item}
        activeCategory={activeCategory}
      />
    )
  })

  return <div className="categories">{categoryComponents}</div>
}

export default Categories