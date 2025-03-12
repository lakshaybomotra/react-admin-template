import { put, takeLatest } from 'redux-saga/effects'
import { message } from 'antd'
import { loginFailure, loginRequest, loginSuccess } from './authSlice'

function* handleLogin() {
    try {
        const user = {
            name: 'Admin',
            email: 'admin@example.com'
        }
        yield put(loginSuccess({ user, token: 'fake-token' }))
        message.success('Logged in successfully!')
    } catch (error) {
        yield put(loginFailure())
        message.error(error.message)
    }
}

export function* authSaga() {
    yield takeLatest(loginRequest.type, handleLogin)
}

export default authSaga
