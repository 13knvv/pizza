import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'
import { api } from '../../api/firebaseApi'
import { changeIsPizzasLoaded, setPizzas } from '../../Redux/pizzasSlice'
import { RootState } from '../../Redux/store'
import AscDesc from '../common/AscDesc/AscDesc'
import Categories from '../common/Categories/Categories'
import PizzaCard from '../common/PizzaCard/PizzaCard'
import PizzaCardSkeleton from '../common/PizzaCard/PizzaCardSkeleton'
import Sort from '../common/Sort/Sort'
import { deleteFilters, setFilters } from '../../Redux/filterSlice'

const Main = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const pizzas = useSelector((state: RootState) => state.pizzas.pizzas)
  const isPizzasLoaded = useSelector(
    (state: RootState) => state.pizzas.isPizzasLoaded
  )
  const activeCategory = useSelector(
    (state: RootState) => state.filter.activeCategory
  )
  const activeSortBy = useSelector(
    (state: RootState) => state.filter.activeSortBy
  )
  const ascDesc = useSelector((state: RootState) => state.filter.ascDesc)
  const isMounted = useRef<boolean>(false)
  const isSearchFilters = useRef<boolean>(false)

  useEffect(() => {
    // если есть параметры в браузерной строке
    // то записываем их в редакс
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      dispatch(setFilters(params))
      isSearchFilters.current = true
    } 
  }, [])

  useEffect(() => {
    // исключаем срабатывание при вмонтирование
    // записываем фильтры в строку браузера 
    if (isMounted.current) {
      const str = qs.stringify({
        order: ascDesc,
        category: activeCategory.id,
        sortBy: activeSortBy.id,
      })
      navigate(`?${str}`)
    }
    isMounted.current = true
  }, [activeCategory, activeSortBy, ascDesc])

  useEffect(() => {
    // не делать запрос если в строке браузера есть фильтры
    // дождаться разбора фильтров и записи в редакс в другом useEffect
    // против двойного запроса
    if (!isSearchFilters.current) {
      console.log(111)
      dispatch(changeIsPizzasLoaded(false))
      api
        .getPizzas(activeCategory.id, activeSortBy.property, ascDesc)
        .then((pizzas) => {
          dispatch(setPizzas(pizzas))
          dispatch(changeIsPizzasLoaded(true))
        })
        .catch((err) => alert('main' + err))
    }
    isSearchFilters.current = false
  }, [activeCategory, activeSortBy, ascDesc])

  
  useEffect(() => {
    // при нажатие на Лого сброс фильтров:
    // если фильтры в строке браузера были
    // но пропали то имитируем перезагрузку страницы 
    if (!window.location.search && isMounted.current) {
      dispatch(deleteFilters())
      isMounted.current = false
    }
  }, [window.location.search])

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
          <div className="main__header-sort">
            <Sort />
            <AscDesc />
          </div>
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
