import axios from 'axios'
import { message } from 'antd'
import store from '../store'
import { logout } from '../store/slices/authSlice'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
  timeout: 10000,
})

api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status

    if (status === 401) {
      message.error('Session expired. Please login again.')
      store.dispatch(logout())
      window.location.href = '/login'
    } else if (status === 500) {
      message.error('Server error. Please try again later.')
    } else {
      message.error(error?.response?.data?.message || 'An error occurred')
    }

    return Promise.reject(error)
  }
)

export default api
