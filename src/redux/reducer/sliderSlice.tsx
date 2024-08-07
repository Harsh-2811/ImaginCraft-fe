import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axiosInstance from "../../api/axiosConfig"
import axios from 'axios'

const { VITE_API_URL } = import.meta.env

interface SliderState {
  images: []
  status: string
  error: string | null
}

const initialState: SliderState = {
  images: [],
  status: 'idle',
  error: null,
}
// Thunk to fetch slider images
export const fetchSliderImages = createAsyncThunk(
  'fetchSliderImages',
  async () => {
    debugger
    const response = await axios.get(
      `${VITE_API_URL}/assets/slider_images/?size=PORTRAIT`
    )
    console.log(response.data, '!!!!!!!!!!!!!!!!!!!!!!!!')
    return response.data
  }
)

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliderImages.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchSliderImages.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.images = action.payload
      })
      .addCase(fetchSliderImages.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default sliderSlice.reducer
