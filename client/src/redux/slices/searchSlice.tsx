import { createSlice } from '@reduxjs/toolkit'

interface Init {
  searchText: string
}

const initialState: Init = {
  searchText: ''
}

const searchSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setSearchText: (state, actions) => {
      state.searchText = actions.payload
    }
  }
})

export const { setSearchText } = searchSlice.actions
export default searchSlice.reducer
