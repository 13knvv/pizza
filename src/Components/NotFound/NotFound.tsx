import { Link } from 'react-router-dom'
import errorSvg from './svg/404.svg'

const NotFound = () => {
  return <div className="not-found">
    <h2>Такой странички нету. Переходи <Link to='/' >на главную</Link></h2>
    <img className='not-found__error-svg' src={errorSvg} alt="" />
    </div>
}

export default NotFound