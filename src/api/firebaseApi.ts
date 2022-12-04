import { initializeApp } from 'firebase/app'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCsbyO0cRzMpF-_7m2BCKNTyZdBNi3cNs0',
  authDomain: 'pizza-78e3d.firebaseapp.com',
  projectId: 'pizza-78e3d',
  storageBucket: 'pizza-78e3d.appspot.com',
  messagingSenderId: '159894766048',
  appId: '1:159894766048:web:9f72992e111dc7b9922b85',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage()

export interface IPizza {
  id: string
  imgName: string
  name: string
  types: number[]
  size: number[]
  category: number
  price: number
  rating: number
}

export const api = {
  async getPizzas() {
    const result = [] as Array<IPizza>
    const querySnapshot = await getDocs(collection(db, 'pizzas'))
    querySnapshot.forEach( (doc) => {
      const data = doc.data()
      result.push({
        id: doc.id,
        name: data.name,
        price: data.price,
        imgName: data.imgName,
        rating: data.rating,
        types: data.types,
        size: data.size,
        category: data.category,
      })
    })
    return result
  },

  async addPizza() {
    const docRef = await addDoc(collection(db, 'pizzas'), {
      imgName: '1.png',
      name: 'Пеперони',
      types: [0, 1],
      size: [26, 30, 40],
      category: 0,
      price: 550,
      rating: 3,
    })
  },

  async getImgUrl(idPizza: string, imgName: string) {
    console.log(`/pizzas/${idPizza}/${imgName}`)
    const url = await getDownloadURL(
      ref(storage, `/pizzas/${idPizza}/${imgName}`)
    )
    return url
  },
}
