import React from 'react'
import { Switch } from 'antd'
import { BulbOutlined, BulbFilled } from '@ant-design/icons'
import { useThemeUpdater } from '../App'

const ThemeToggle = () => {
  const { mode, setMode } = useThemeUpdater()

  const toggle = (checked) => {
    setMode(checked ? 'dark' : 'light')
    localStorage.setItem('theme', checked ? 'dark' : 'light')
  }

  return (
    <Switch
      checked={mode === 'dark'}
      onChange={toggle}
      checkedChildren={<BulbFilled />}
      unCheckedChildren={<BulbOutlined />}
    />
  )
}

export default ThemeToggle
