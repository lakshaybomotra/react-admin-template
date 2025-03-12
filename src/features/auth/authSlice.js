import { createSlice } from '@reduxjs/toolkit'

const loadAuthState = () => {
  try {
    const storedData = JSON.parse(localStorage.getItem('auth'))
    const { user, token } = storedData
    return { isAuthenticated: true, loading: false, user, token }
  } catch (error) {
    console.error(error)
    return null
  }
}

const initialState = loadAuthState() || {
  isAuthenticated: false,
  loading: false,
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
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
      localStorage.setItem(
        'auth',
        JSON.stringify({ user: action.payload.user, token: action.payload.token })
      )
    },
    loginFailure: (state) => {
      state.loading = false
      state.isAuthenticated = false
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.loading = false
      state.user = null
      state.token = null

      localStorage.removeItem('auth')
    },
  },
})

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions
export default authSlice.reducer
