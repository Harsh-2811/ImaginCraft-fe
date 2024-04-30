import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit'
import { store } from '../store'

interface InitialState {
  screenSize: {
    height: number
    width: number
  }
}

const initialState: InitialState = {
  screenSize: {
    height: window.innerHeight || 0,
    width: window.innerWidth || 0,
  },
}
const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setScreenSize: (
      state,
      action: PayloadAction<{ height: number; width: number }>
    ) => {
      state.screenSize.height = action.payload.height
      state.screenSize.width = action.payload.width
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    console.log('builder', builder)
  },
})

export const { setScreenSize } = authSlice.actions
export default authSlice.reducer

// Add event listener to update screen size when the window is resized
window.addEventListener('resize', () => {
  store.dispatch(
    setScreenSize({ height: window.innerHeight, width: window.innerWidth })
  )
})
