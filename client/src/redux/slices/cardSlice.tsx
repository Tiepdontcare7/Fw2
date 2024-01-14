import { createSlice } from '@reduxjs/toolkit'

interface Init {
  quantityCard: number
}

const initialState: Init = {
  quantityCard: 0
}

const productSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setQuantityCard: (state, actions) => {
      state.quantityCard = actions.payload
    }
  }
})

export const { setQuantityCard } = productSlice.actions
export default productSlice.reducer
