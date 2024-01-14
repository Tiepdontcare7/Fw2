import { configureStore } from '@reduxjs/toolkit'
import { cardReducer, searchReducer } from './rootReducer'

export const store = configureStore({
  reducer: {
    card: cardReducer,
    search: searchReducer
  }
})
