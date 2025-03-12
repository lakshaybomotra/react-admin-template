/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Typography, Spin } from 'antd'
import { useThemeTokens } from '../../App'
import { loginRequest } from './authSlice'
import { useTranslation } from 'react-i18next'
import AppButton from '../../components/ui/AppButton'

const { Title } = Typography

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { loading, isAuthenticated } = useSelector((state) => state.auth)
  const {
    colorTextBase,
    padding,
    colorBgBase,
    headerBg,
  } = useThemeTokens()

  const onFinish = (values) => {
    dispatch(loginRequest(values))
  }

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: colorBgBase,
        padding,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          padding,
          background: headerBg,
          borderRadius: 8,
        }}
      >
        <Title level={3} style={{ color: colorTextBase, textAlign: 'center' }}>
          {t('login.title')}
        </Title>
        <Form
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            name="username"
            label={t('login.username')}
            rules={[{ required: true, message: t('login.required', { field: t('login.username') }) }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label={t('login.password')}
            rules={[{ required: true, message: t('login.required', { field: t('login.password') }) }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <AppButton
              type='primary'
              block
              onClick={onFinish}
              disabled={loading}
            >
              {loading ? <Spin size="small" /> : 'Login'}
            </AppButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
