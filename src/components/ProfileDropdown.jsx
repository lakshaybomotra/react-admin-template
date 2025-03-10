import React from 'react'
import { Dropdown, Menu, Avatar } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/auth/authSlice'
import { useThemeTokens } from '../App'

const ProfileDropdown = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const tokens = useThemeTokens()
  const user = useSelector((state) => state.auth.user)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  const menu = (
    <Menu
      items={[
        {
          key: 'profile',
          label: 'My Profile',
          icon: <UserOutlined />,
          disabled: false,
        },
        {
          key: 'logout',
          label: 'Logout',
          icon: <LogoutOutlined />,
          onClick: handleLogout,
        },
      ]}
    />
  )

  return (
    <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
      <Avatar
        style={{ backgroundColor: tokens.colorPrimary, cursor: 'pointer' }}
      >
        {user?.name?.charAt(0)?.toUpperCase() || 'A'}
      </Avatar>
    </Dropdown>
  )
}

export default ProfileDropdown
