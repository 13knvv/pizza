import { useEffect, useState } from 'react'
import { api } from '../../../api/firebaseApi'
import ButtonAdd from '../ButtonAdd/ButtonAdd'
import PizzaCardSkeleton from './PizzaCardSkeleton'

interface IPropsPizzaCard {
  id: string
  imgName: string
  name: string
  types: number[]
  size: number[]
  category: number
  price: number
}

const PizzaCard = (props: IPropsPizzaCard) => {
  const { id, name, types, size, price, imgName } = props
  const [activeType, setActiveType] = useState<number>(0)
  const [activeSize, setActiveSize] = useState<number>(0)
  const [imgUrl, setImgUrl] = useState<any>('')

  useEffect(() => {
    api
      .getImgUrl(id, imgName)
      .then((url) => {
        setImgUrl(url)
        console.log(url)
      })
      .catch((err) => '')
  }, [])


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

  if (!imgUrl) {
    return <PizzaCardSkeleton />
  }

  return (
    <div className="pizza-card">
      <div className="pizza-card__img-wrapp">
        <img src={imgUrl} alt="" />
      </div>
      <h3 className="pizza-card__title">{name}</h3>
      <div className="pizza-card__options">
        <div className="pizza-card__options-items">{typeComponents}</div>
        <div className="pizza-card__options-items">{sizeComponents}</div>
      </div>
      <div className="pizza-card__footer">
        <div className="pizza-card__price">{price} p.</div>
        <ButtonAdd />
      </div>
    </div>
  )
}

export default PizzaCard
