import { useEffect, useState } from 'react'
import { api, IPizza } from '../../api/firebaseApi'
import Categories from '../common/Categories/Categories'
import PizzaCard from '../common/PizzaCard/PizzaCard'
import PizzaCardSkeleton from '../common/PizzaCard/PizzaCardSkeleton'
import Sort from '../common/Sort/Sort'

const pizzasFakeData = [
  {
    id: '0',
    imgName: '1.png',
    name: 'Пеперони',
    types: [0, 1],
    size: [26, 30, 40],
    category: 0,
    price: 550,
    rating: 3,
  },
]

const Main = () => {
  const [pizzasData, setPizzasData] = useState<IPizza[] | null>(null)

  useEffect(() => {
    api
      .getPizzas()
      .then((pizzas) => {
        setPizzasData(pizzas)
      })
      .catch((err) => alert('main' + err))
  }, [])

  const pizzaCards = pizzasData?.map((data) => {
    return <PizzaCard key={data.id} {...data} />
  })

  return (
    <main className="main">
      <div className="main__header">
        <Categories />

        <div className='main__header-title'>
          <h2>Все пиццы</h2>
          <Sort />
        </div>
      </div>
      <div className="main__body">
        <div className="pizzas">
          {!pizzasData
            ? [...new Array(8)].map((fake, index) => (
                <PizzaCardSkeleton key={index} />
              ))
            : pizzasData?.map((data) => {
                return <PizzaCard key={data.id} {...data} />
              })}
        </div>
      </div>
    </main>
  )
}

export default Main
