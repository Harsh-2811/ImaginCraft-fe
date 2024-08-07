import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './reducer/auth.reducer'
import sliderReducer from './reducer/sliderSlice'
import categoryimagesReducer from './reducer/categoryimagesSlice'
import themeimagesReducer from './reducer/themeimagesSlice'

// Root reducer combining all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  slider: sliderReducer,
  categoryimages: categoryimagesReducer,
  themeimages: themeimagesReducer,

  // Add other reducers here if needed
})

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage,
}

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Configure and export the Redux store
export const store = configureStore({
  reducer: persistedReducer,
})

// Create a persisted version of the store
export const persistor = persistStore(store)

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
