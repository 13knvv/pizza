import { useState } from 'react'
import { api } from '../../api/firebaseApi'

const AdminPage = () => {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [category, setCategory] = useState<number>(1)
  const [type1, setTypes1] = useState<boolean>(false)
  const [type2, setTypes2] = useState<boolean>(false)
  const [size26, setSize26] = useState<boolean>(false)
  const [size30, setSize30] = useState<boolean>(false)
  const [size40, setSize40] = useState<boolean>(false)
  const [foto, setFoto] = useState<any>(null)

  const createTypes = () => {
    const result: number[] = []

    type1 && result.push(0)
    type2 && result.push(1)

    return result
  }

  const createSizeis = () => {
    const result: number[] = []

    size26 && result.push(26)
    size30 && result.push(30)
    size40 && result.push(40)

    return result
  }

  const clearForm = () => {
    setName('')
    setPrice(0)
    setCategory(0)
    setTypes1(false)
    setTypes2(false)
    setSize26(false)
    setSize30(false)
    setSize40(false)
    setFoto(null)
  }


  const onChangeFile = (e: any) => {
    setFoto(e.target.files[0])
  }

  const add = async () => {
    const pizza = {
      imgName: foto.name,
      name: name,
      category: category,
      price: price,
      types: createTypes(),
      size: createSizeis(),
      rating: 0,
    }

   await api.addPizza(pizza, foto)
    clearForm()
  }

  return (
    <div>
      <div>
        name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />
      </div>
      <div>
        category:
        <select value={category} onChange={(e) => setCategory(+e.target.value)}>
          <option value="1">Мясные</option>
          <option value="2">Вегетарианские</option>
          <option value="3">Гриль</option>
          <option value="4">Острые</option>
          <option value="5">Закрытые</option>
        </select>
      </div>
      <div>
        types:
        <div>
          <input
            type="checkbox"
            checked={type1}
            onChange={(e) => setTypes1(e.target.checked)}
          />
          тонкое
        </div>
        <div>
          <input
            type="checkbox"
            checked={type2}
            onChange={(e) => setTypes2(e.target.checked)}
          />
          традиционное
        </div>
      </div>
      <div>
        size:
        <div>
          <input
            type="checkbox"
            checked={size26}
            onChange={(e) => setSize26(e.target.checked)}
          />
          26
        </div>
        <div>
          <input
            type="checkbox"
            checked={size30}
            onChange={(e) => setSize30(e.target.checked)}
          />
          30
        </div>
        <div>
          <input
            type="checkbox"
            checked={size40}
            onChange={(e) => setSize40(e.target.checked)}
          />
          40
        </div>
      </div>
      <div>
        <input type="file" onChange={(e) => onChangeFile(e) } />
      </div>

      <button onClick={add}>add</button>
    </div>
  )
}

export default AdminPage
