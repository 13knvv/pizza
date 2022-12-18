import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICategory {
  id: number
  name: String
}

export interface FilterState {
  categories: Array<ICategory>
  activeCategory: ICategory
}

const initialState: FilterState = {
  categories: [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Мясные' },
    { id: 2, name: 'Вегетарианские' },
    { id: 3, name: 'Гриль' },
    { id: 4, name: 'Острые' },
    { id: 5, name: 'Закрытые' },
  ],
  activeCategory: { id: 0, name: 'Все' },
}

export const filterSlice = createSlice({
  name: 'filterPizzas',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<ICategory>) => {
      state.activeCategory = action.payload
    },
  },
})

export const { setActiveCategory } = filterSlice.actions
export default filterSlice.reducer
