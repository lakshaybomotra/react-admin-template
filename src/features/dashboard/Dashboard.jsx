import React from 'react'
import { Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { useThemeTokens } from '../../App'
import AppButton from '../../components/ui/AppButton'
import PageHeader from '../../components/ui/PageHeader'

const { Title } = Typography

const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
                // minHeight: '100vh',
            }}
        >
            <PageHeader
                title={`Welcome, ${user.name}`}
                subtitle="Manage all system users"
            />

            <AppButton onClick={handleLogout}>Logout</AppButton>

        </div>
    )
}

export default Dashboard
