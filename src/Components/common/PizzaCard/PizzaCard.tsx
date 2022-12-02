import img1 from '../../../img/pizzas/1.png'
import img2 from '../../../img/pizzas/2.png'
import img3 from '../../../img/pizzas/3.png'
import img4 from '../../../img/pizzas/4.png'

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
  const { id, imgName, name, types, size, category, price } = props
  /// написать useState для type, size
  /// написать стили и разметку

  const imges = [img1, img2, img3, img4]
  const typesName = ['тонкое', 'традиционное']
  const typeComponents = types.map((type) => (
    <div key={type}>{typesName[type]}</div>
  ))
  const sizeComponents = size.map((size) => (
    <div key={size}>{size + ' см.'}</div>
  ))

  return (
    <div>
      <div>
        <img src={imges[id]} alt="" />
      </div>
      <h3>{name}</h3>
      <div>
        <div>{typeComponents}</div>
        <div>{sizeComponents}</div>
      </div>
      <div>
        <div>{price}</div>
        <button>Добавить</button>
      </div>
    </div>
  )
}

export default PizzaCard
