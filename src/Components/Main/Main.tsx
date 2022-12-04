import Categories from '../common/Categories/Categories'
import PizzaCard from '../common/PizzaCard/PizzaCard'
import Sort from '../common/Sort/Sort'

const pizzasData = [
  {
    id: 0,
    imgName: '1.png',
    name: 'Пеперони',
    types: [0, 1],
    size: [26, 30, 40],
    category: 0,
    price: 550
  },
  {
    id: 1,
    imgName: '2.png',
    name: 'Сырная',
    types: [0, 1],
    size: [26, 30],
    category: 1,
    price: 550
  },
  {
    id: 2,
    imgName: '3.png',
    name: 'Пеперони',
    types: [0, 1],
    size: [26, 30, 40],
    category: 2,
    price: 550
  },
  {
    id: 3,
    imgName: '4.png',
    name: 'Пеперони',
    types: [0, 1],
    size: [26, 30, 40],
    category: 2,
    price: 550
  },
  {
    id: 4,
    imgName: '4.png',
    name: 'Пеперони',
    types: [0, 1],
    size: [26, 30, 40],
    category: 2,
    price: 550
  },
  {
    id: 5,
    imgName: '3.png',
    name: 'Пеперони',
    types: [0, 1],
    size: [26, 30, 40],
    category: 2,
    price: 550
  },
]

const Main = () => {

  const pizzaCards = pizzasData.map( data => {
    return <PizzaCard key={data.id} {...data} />
  })
  
  return (
    <main className="main">
      <div className="main__header">
        <Categories />
        <Sort />
      </div>
      <div className='main__body'>
        <h2>Все пиццы</h2>
        <div className='pizzas'>
          {pizzaCards}
        </div>
      </div>
    </main>
  )
}

export default Main
