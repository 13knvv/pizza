import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICategory {
  id: number
  name: string
}
export interface ISortBy {
  id: number
  name: string
  property: string
}

export interface FilterState {
  ascDesc: string
  categories: Array<ICategory>
  activeCategory: ICategory
  sortByList: Array<ISortBy>
  activeSortBy: ISortBy
}

const initialState: FilterState = {
  ascDesc: 'desc',
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
    { id: 0, name: 'популярности', property: 'rating' },
    { id: 1, name: 'цене', property: 'price' },
    { id: 2, name: 'алфавиту', property: 'name' },
  ],
  activeSortBy: { id: 0, name: 'популярности', property: 'rating' },
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
    setAscDesc: (state, action: PayloadAction<string>) => {
      state.ascDesc = action.payload
    },
  },
})

export const { setActiveCategory, setActiveSortBy, setAscDesc } =
  filterSlice.actions
export default filterSlice.reducer
