import React from 'react'
import { Typography } from 'antd'
import { useThemeTokens } from '../../App'

const PageHeader = ({ title, subtitle = null }) => {
  const tokens = useThemeTokens()

  return (
    <div style={{ marginBottom: '24px' }}>
      <Typography.Title level={3} style={{ color: tokens.colorTextBase, marginBottom: 0 }}>
        {title}
      </Typography.Title>
      {subtitle && (
        <Typography.Text style={{ color: tokens.colorTextTertiary }}>
          {subtitle}
        </Typography.Text>
      )}
    </div>
  )
}

export default PageHeader
