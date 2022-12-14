import { initializeApp } from 'firebase/app'
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

const firebaseConfig = {
  // apiKey: 'AIzaSyCsbyO0cRzMpF-_7m2BCKNTyZdBNi3cNs0',
  // authDomain: 'pizza-78e3d.firebaseapp.com',
  // projectId: 'pizza-78e3d',
  // storageBucket: 'pizza-78e3d.appspot.com',
  // messagingSenderId: '159894766048',
  // appId: '1:159894766048:web:9f72992e111dc7b9922b85',

  apiKey: 'AIzaSyDZOMlwyDiem3qABkv1WGuoK2FMZLdYJOg',
  authDomain: 'pizza3-2884c.firebaseapp.com',
  projectId: 'pizza3-2884c',
  storageBucket: 'pizza3-2884c.appspot.com',
  messagingSenderId: '85543088820',
  appId: '1:85543088820:web:0c73529da7e6ac62d15de1',
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
    querySnapshot.forEach((doc) => {
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

  async getPizzasBy(category: number, sortBy: string) {
    const result = [] as Array<IPizza>
    const q = query(
      collection(db, 'pizzas'),
      orderBy(sortBy, 'desc'),
      where('category', '==', category)
    )

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
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

  async addPizza(pizza: any, foto: File) {
    const docRef = await addDoc(collection(db, 'pizzas'), pizza)
    console.log(docRef.id)
    this.uploudFile(foto, docRef.id)
  },

  uploudFile(file: any, id: string) {
    uploadBytes(ref(storage, `pizzas/${id}/${file.name}`), file)
      .then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot)
      })
      .catch((err) => console.log('uploadError', err))
  },

  async getImgUrl(idPizza: string, imgName: string) {
    const url = await getDownloadURL(
      ref(storage, `pizzas/${idPizza}/${imgName}`)
    )
    return url
  },
}
