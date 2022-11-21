import logo from './svg/pizzaLogo.svg'

const Header = () => {
  return (
    <div>
      <div className="Header__logo">
        <div className="Header__logo-img-wrapp">
          <img src={logo} alt="Pizza" />
        </div>
        <div className="Header__logo-title-wrapp">
          <h1>Pizza</h1>
          <div>время подкрепиться</div>
        </div>
      </div>
    </div>
  )
}

export default Header
