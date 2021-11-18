import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../reducers/reducer'
export const store = configureStore({
  reducer: {
    axios:apiSlice,
  },
})