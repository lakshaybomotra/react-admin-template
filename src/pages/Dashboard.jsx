import React from 'react'
import { Button, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { useThemeTokens } from '../App'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { user } = useSelector((state) => state.auth)
    const { colorTextBase, padding, colorBgBase } = useThemeTokens()

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <div
            style={{
                padding,
                color: colorTextBase,
                background: colorBgBase,
                minHeight: '100vh',
            }}
        >
            <Title level={2} style={{ color: colorTextBase }}>
                {t('dashboard.welcome', { name: user.name })}
            </Title>
            <Button type="primary" onClick={handleLogout}>
                {t('common.logout')}
            </Button>
        </div>
    )
}

export default Dashboard
