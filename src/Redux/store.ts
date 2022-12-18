import { configureStore } from '@reduxjs/toolkit'
import pizzasReducer from './pizzasSlice'
import filterReducer from './filterSlice'

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    filter: filterReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
