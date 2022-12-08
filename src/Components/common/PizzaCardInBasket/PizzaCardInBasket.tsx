const PizzaCardInBasket = () => {
  return (
    <div className="pizzaCardInBasket">
      <div className="pizzaCardInBasket__product">
        <div className="pizzaCardInBasket__img">
          <img src="" alt="" />
        </div>
        <div className="pizzaCardInBasket__title">
          <h3>name</h3>
          <span>type, size</span>
        </div>
      </div>
      <div className="pizzaCardInBasket__settings">
        <div className="pizzaCardInBasket__quantity">
          <button className="pizzaCardInBasket__button">
            <span>-</span>
          </button>
          <span>2</span>
          <button className="pizzaCardInBasket__button">
            <span>+</span>
          </button>
        </div>
        <div className="pizzaCardInBasket__cost">900 р</div>
        <button className="pizzaCardInBasket__button pizzaCardInBasket__button--delete">
          <span>+</span>
        </button>
      </div>
    </div>
  )
}

export default PizzaCardInBasket
