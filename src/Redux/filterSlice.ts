import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICategory {
  id: number
  name: String
}
export interface ISortBy {
  id: number
  name: String
}

export interface FilterState {
  categories: Array<ICategory>
  activeCategory: ICategory
  sortByList: Array<ISortBy>
  activeSortBy: ISortBy
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

  sortByList: [
    { id: 0, name: 'популярности' },
    { id: 1, name: 'цене' },
    { id: 2, name: 'алфавиту' },
  ],
  activeSortBy: { id: 0, name: 'популярности' },
}

export const filterSlice = createSlice({
  name: 'filterPizzas',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<ICategory>) => {
      state.activeCategory = action.payload
    },
    setActiveSortBy: (state, action: PayloadAction<ISortBy>) => {
      state.activeSortBy = action.payload
    },
  },
})

export const { setActiveCategory, setActiveSortBy } = filterSlice.actions
export default filterSlice.reducer
