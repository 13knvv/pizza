import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPizza } from '../api/firebaseApi'

export interface PizzasState {
  pizzas: IPizza[]
  isPizzasLoaded: boolean
}

const initialState: PizzasState = {
  pizzas: [
    {
      id: '0',
      imgName: '1.png',
      name: 'Пеперони',
      types: [0, 1],
      size: [26, 30, 40],
      category: 0,
      price: 550,
      rating: 3,
    },
  ],

  isPizzasLoaded: false
}

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas: (state, action: PayloadAction<IPizza[]>) => {
      state.pizzas = action.payload
    },
    changeIsPizzasLoaded: (state, action: PayloadAction<boolean>) => {
      state.isPizzasLoaded = action.payload
    }
  },
})

export const { setPizzas, changeIsPizzasLoaded } = pizzasSlice.actions
export default pizzasSlice.reducer
