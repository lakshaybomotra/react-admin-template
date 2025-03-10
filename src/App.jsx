/* eslint-disable react-refresh/only-export-components */
import React, { useState, createContext, useContext } from 'react'
import { ConfigProvider, theme as antdTheme } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { themes } from './theme/theme'
import AppRoutes from './routes/AppRoutes'

export const ThemeTokenContext = createContext()
export const ThemeUpdateContext = createContext()

export const useThemeTokens = () => useContext(ThemeTokenContext)
export const useThemeUpdater = () => useContext(ThemeUpdateContext)


const App = () => {
    const [mode, setMode] = useState(localStorage.getItem('theme') || 'light')
    const themeTokens = themes[mode].token

    const currentTheme = {
        token: themeTokens,
        algorithm:
            mode === 'dark'
                ? antdTheme.darkAlgorithm
                : antdTheme.defaultAlgorithm,
    }

    return (
        <ThemeTokenContext.Provider value={themeTokens}>
            <ThemeUpdateContext.Provider value={{ mode, setMode }}>
                <ConfigProvider theme={currentTheme}>
                    <BrowserRouter>
                        <AppRoutes />
                    </BrowserRouter>
                </ConfigProvider>
            </ThemeUpdateContext.Provider>
        </ThemeTokenContext.Provider>
    )
}

export default App
