import basketSvg from './svg/basket.svg'

const ButtonBasket = () => {
  return (
    <button className="ButtonBasket">
      520 ₽<span></span>
      <div>
        <img src={basketSvg} alt="basket" />
      </div>
      3
    </button>
  )
}

export default ButtonBasket
