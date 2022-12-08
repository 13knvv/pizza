import { useNavigate } from 'react-router-dom'
import basketSvg from './svg/basket.svg'

const ButtonBasket = () => {
  let navigate = useNavigate()

  return (
    <button onClick={() => navigate('/basket')} className="button-basket">
      <span>520 ₽</span>
      <span className='button-basket__line'></span>
      <div>
        <img src={basketSvg} alt="basket" />
      </div>
      3
    </button>
  )
}

export default ButtonBasket
