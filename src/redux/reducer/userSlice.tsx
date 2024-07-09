import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { toast } from "react-toastify";


const { VITE_API_URL } = import.meta.env;


interface UserState {
  user: any; // Define your user object type here
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

export const loginUser = createAsyncThunk(
  'loginUser',
  async (userData: { email: string; password : string }, thunkAPI) => {
    try {
        debugger
      const response = await fetch(`${VITE_API_URL}/user/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (data.access) {
        localStorage.setItem("user-token", data.access);
        toast.success("Login successful");
        window.location.href = "/playground"  
        return thunkAPI.rejectWithValue(data);
        
      }else if(data.detail){
        toast.error(data.detail);

      }
      return data;
    } catch (error) {

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Additional reducers can be added here for logout, etc.
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;