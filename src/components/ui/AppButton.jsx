import React from 'react'
import { Button } from 'antd'
import { useThemeTokens } from '../../App'

const AppButton = ({ children, type = 'primary', size = 'large', ...rest }) => {
    const tokens = useThemeTokens()

    return (
        <Button
            type={type}
            size={size}
            style={{
                fontWeight: '500',
                backgroundColor: type === 'primary' ? tokens.primaryColor : undefined,
                color: type === 'primary' ? tokens.colorTextOnPrimary : undefined,
                borderRadius: 4,
            }}
            {...rest}
        >
            {children}
        </Button>
    )
}

export default AppButton
