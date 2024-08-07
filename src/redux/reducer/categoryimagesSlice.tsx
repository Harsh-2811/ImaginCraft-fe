import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const { VITE_API_URL } = import.meta.env

interface CategoryimagesState {
  images: []
  status: string
  error: string | null
}

const initialState: CategoryimagesState = {
  images: [],
  status: 'idle',
  error: null,
}

// Thunk to fetch Category images
export const fetchCategoryImages = createAsyncThunk(
  'fetchCategoryImages',
  async () => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('user-token')

    // Configure headers to include the token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    // Make the request with the configured headers
    const response = await axios.get(
      `${VITE_API_URL}/assets/categories/`,
      config
    )
    console.log(response.data, '!!!!!!!!!!!!!!!!!!!!!!!!')
    return response.data
  }
)

const categoryimagesSlice = createSlice({
  name: 'categoryimages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryImages.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCategoryImages.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.images = action.payload
      })
      .addCase(fetchCategoryImages.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default categoryimagesSlice.reducer
