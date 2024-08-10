import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const { VITE_API_URL } = import.meta.env

interface ThemeimagesState {
  images: []
  status: string
  error: string | null
}

const initialState: ThemeimagesState = {
  images: [],
  status: 'idle',
  error: null,
}

// Thunk to fetch Category images
export const fetchThemeImages = createAsyncThunk(
  'fetchThemeImages',
  async (category_id) => {
    debugger
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
      `${VITE_API_URL}/assets/themes/${category_id}/`,
      config
    )
    console.log(response.data, '!!!!!!!!!!!!!!!!!!!!!!!!')
    return response.data
  }
)

const themeimagesSlice = createSlice({
  name: 'themeimages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchThemeImages.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchThemeImages.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.images = action.payload
      })
      .addCase(fetchThemeImages.rejected, (state: any, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default themeimagesSlice.reducer
