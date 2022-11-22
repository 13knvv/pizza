import { Link } from 'react-router-dom'
import ButtonBasket from '../common/ButtonBasket/ButtonBasket'
import logo from './svg/pizzaLogo.svg'

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__logo">
        <div className="Header__logo-img-wrapp">
          <Link to={'/'}>
            <img src={logo} alt="Pizza" />
          </Link>
        </div>
        <div className="Header__logo-title-wrapp">
          <h1>
            <Link to={'/'}>Pizza</Link>
          </h1>
          <div>
            <Link to={'/'}>время подкрепиться</Link>
          </div>
        </div>
      </div>
      <ButtonBasket />
    </header>
  )
}

export default Header
