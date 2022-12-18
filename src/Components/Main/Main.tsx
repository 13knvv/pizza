import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../../api/firebaseApi'
import { changeIsPizzasLoaded, setPizzas } from '../../Redux/pizzasSlice'
import { RootState } from '../../Redux/store'
import Categories from '../common/Categories/Categories'
import PizzaCard from '../common/PizzaCard/PizzaCard'
import PizzaCardSkeleton from '../common/PizzaCard/PizzaCardSkeleton'
import Sort from '../common/Sort/Sort'

const Main = () => {
  const dispatch = useDispatch()
  const pizzas = useSelector((state: RootState) => state.pizzas.pizzas)
  const isPizzasLoaded = useSelector(
    (state: RootState) => state.pizzas.isPizzasLoaded
  )

  useEffect(() => {
    dispatch(changeIsPizzasLoaded(false))
    api
      .getPizzas()
      .then((pizzas) => {
        dispatch(setPizzas(pizzas))
        dispatch(changeIsPizzasLoaded(true))
      })
      .catch((err) => alert('main' + err))
  }, [])

  const pizzaCards = pizzas.map((data) => {
    return <PizzaCard key={data.id} {...data} />
  })

  const fakePizzaCards = [...new Array(8)].map((fake, index) => (
    <PizzaCardSkeleton key={index} />
  ))

  return (
    <main className="main">
      <div className="main__header">
        <Categories />
        <div className="main__header-title">
          <h2>Все пиццы</h2>
          <Sort />
        </div>
      </div>
      <div className="main__body">
        <div className="pizzas">
          {isPizzasLoaded ? pizzaCards : fakePizzaCards}
        </div>
      </div>
    </main>
  )
}

export default Main
