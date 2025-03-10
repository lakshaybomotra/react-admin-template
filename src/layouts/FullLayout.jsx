import React, { useState } from 'react'
import { Layout, Menu, Drawer, Button, Grid } from 'antd'
import { MenuOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useThemeTokens } from '../App'
import ThemeToggle from '../components/ThemeToggle'
import ProfileDropdown from '../components/ProfileDropdown'

const { Header, Content, Footer, Sider } = Layout
const { useBreakpoint } = Grid

const FullLayout = () => {
    const navigate = useNavigate()
    const tokens = useThemeTokens()
    const screens = useBreakpoint()
    const location = useLocation()

    const [collapsed, setCollapsed] = useState(false)
    const [mobileDrawerVisible, setMobileDrawerVisible] = useState(false)

    const isMobile = !screens.md

    const menuItems = [
        {
            key: '/',
            label: 'Dashboard',
        },
        {
            key: '/users',
            label: 'Users',
        },
    ]

    const handleMenuClick = ({ key }) => {
        navigate(key)
        if (isMobile) setMobileDrawerVisible(false)
    }

    const SidebarContent = (
        <Menu
            mode="inline"
            items={menuItems}
            onClick={handleMenuClick}
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0, background: tokens.siderBg, color: tokens.colorTextBase }}
            theme="dark"
        />

    )

    return (
        <Layout style={{ minHeight: '100vh', width: '100%', margin: 0, padding: 0 }}>
            {!isMobile && (
                <Sider
                    collapsed={collapsed}
                    width={200}
                    style={{
                        background: tokens.siderBg,
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        zIndex: 1000
                    }}
                >
                    <div
                        style={{
                            height: '64px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: collapsed ? 'center' : 'start',
                            padding: '0 16px',
                            background: tokens.siderBg,
                            color: tokens.colorTextOnPrimary,
                            fontWeight: 'bold',
                            fontSize: '18px',
                        }}
                    >
                        {!collapsed ? 'My Logo' : '🌀'}
                    </div>
                    <div style={{ height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
                        {SidebarContent}
                    </div>
                </Sider>
            )}

            <Layout style={{ marginLeft: !isMobile ? (collapsed ? 80 : 200) : 0 }}>
                <Header
                    style={{
                        background: tokens.siderBg,
                        color: tokens.colorTextBase,
                        padding: `0 ${tokens.padding}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        width: !isMobile ? `calc(100% - ${collapsed ? 80 : 200}px)` : '100%',
                        zIndex: 1000
                    }}
                >
                    {isMobile ? (
                        <Button
                            icon={<MenuOutlined />}
                            onClick={() => setMobileDrawerVisible(true)}
                            style={{ border: 'none', color: tokens.colorTextBase }}
                        />
                    ) : (
                        <Button
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{ border: 'none', color: tokens.colorTextBase }}
                        />
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ fontWeight: 'bold', color: tokens.colorTextOnPrimary }}>My Admin Panel</div>
                        <ThemeToggle />
                        <ProfileDropdown />
                    </div>
                </Header>

                <Content
                    style={{
                        margin: tokens.margin,
                        marginTop: 'calc(64px + 24px)',
                        paddingBottom: tokens.padding,
                        overflow: 'auto',
                        minHeight: 'calc(100vh - 64px - 70px)',
                        background: tokens.colorBgBase,
                        color: tokens.colorTextBase,
                    }}
                >

                    <Outlet />
                </Content>

                <Footer style={{ background: tokens.footerBg, textAlign: 'center' }}>
                    ©2025 Admin Panel
                </Footer>
            </Layout>

            {/* Mobile Sidebar Drawer */}
            {isMobile && (
                <Drawer
                    placement="left"
                    closable={false}
                    onClose={() => setMobileDrawerVisible(false)}
                    open={mobileDrawerVisible}
                    bodyStyle={{ padding: 0, background: tokens.siderBg }}
                    width={250}
                >
                    <div style={{
                        height: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '16px',
                        color: tokens.colorTextOnPrimary,
                        fontWeight: 'bold',
                    }}>
                        My Logo
                    </div>
                    <div style={{ height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
                        {SidebarContent}
                    </div>
                </Drawer>
            )}
        </Layout>
    )
}

export default FullLayout
