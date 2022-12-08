import PizzaCardInBasket from '../common/PizzaCardInBasket/PizzaCardInBasket'
import BasketClear from './BasketClear/BasketClear'
import basketSvg from './svg/basket.svg'

const Basket = () => {
  return (
    <div className="basket">
      <div className="basket__header">
        <div className="basket__title">
          <img src={basketSvg} alt="" />
          <h2>Корзина</h2>
        </div>
        <BasketClear />
      </div>
      <div className="basket__pizzas">
        {/*map <PizzaCardInBasket /> */}
        <PizzaCardInBasket />
        <PizzaCardInBasket />
        <PizzaCardInBasket />
        </div>
      <div className="basket__total">
        <div className="basket__total-pizzas">
          Всего пицц: <span>3 шт</span>
        </div>
        <div className="basket__total-price">
          Сумма заказа: <span>900 руб</span>
        </div>
      </div>
      <div>
        {/*  */}
        {/* <ButtonPay */}
      </div>
    </div>
  )
}

export default Basket
