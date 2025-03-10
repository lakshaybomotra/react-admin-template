import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    loading: false,
    user: null,
    token: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true
    },
    loginSuccess: (state, action) => {
        console.log(action.payload)
      state.loading = false
      state.isAuthenticated = true
      state.user = action.payload.user
      state.token = action.payload.token
    },
    loginFailure: (state) => {
      state.loading = false
      state.isAuthenticated = false
    },
    logout: () => {
      return {
        isAuthenticated: false,
        loading: false,
        user: null,
        token: null,
      }
    },
  },
})

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions
export default authSlice.reducer
