import { useState } from 'react'
import img1 from '../../../img/pizzas/1.png'
import img2 from '../../../img/pizzas/2.png'
import img3 from '../../../img/pizzas/3.png'
import img4 from '../../../img/pizzas/4.png'
import ButtonAdd from '../ButtonAdd/ButtonAdd'

interface IPropsPizzaCard {
  id: number
  imgName: string
  name: string
  types: number[]
  size: number[]
  category: number
  price: number
}

const PizzaCard = (props: IPropsPizzaCard) => {
  const { id, name, types, size, price } = props
  const [activeType, setActiveType] = useState<number>(0)
  const [activeSize, setActiveSize] = useState<number>(0)

  const imges = [img1, img2, img3, img4, img2, img4]
  const typesName = ['тонкое', 'традиционное']
  const typeComponents = types.map((type, index) => (
    <div
      key={type}
      className={
        activeType === index
          ? 'pizza-card__options-item pizza-card__options-item--active'
          : 'pizza-card__options-item'
      }
      onClick={() => setActiveType(index)}
    >
      {typesName[type]}
    </div>
  ))
  const sizeComponents = size.map((size, index) => (
    <div
      key={size}
      className={
        activeSize === index
          ? 'pizza-card__options-item pizza-card__options-item--active'
          : 'pizza-card__options-item'
      }
      onClick={() => setActiveSize(index)}
    >
      {size + ' см.'}
    </div>
  ))

  return (
    <div className="pizza-card">
      <div className="pizza-card__img-wrapp">
        <img src={imges[id]} alt="" />
      </div>
      <h3 className="pizza-card__title">{name}</h3>
      <div className="pizza-card__options">
        <div className="pizza-card__options-items">{typeComponents}</div>
        <div className="pizza-card__options-items">{sizeComponents}</div>
      </div>
      <div className='pizza-card__footer'>
        <div className='pizza-card__price'>{price} p.</div>
        <ButtonAdd />
      </div>
    </div>
  )
}

export default PizzaCard
