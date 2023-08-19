import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: false,
  RegisterData: {}
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = { ...state.user, ...action.payload?.profile }
      state.RegisterData = { ...state.RegisterData, ...action.payload?.RegisterData }
      state.isLoggedIn = true
    },
    signOut: (state) => {
      state.user = {}
      state.isLoggedIn = false
    }
  }
})

export const { signIn, signOut } = userSlice.actions
export default userSlice.reducer