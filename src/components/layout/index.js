import React from 'react'
import { Layout as LayoutAntD } from 'antd'
import Header from './Header'
import { Content } from 'antd/lib/layout/layout'

function Layout({ children, style }) {
  return (
    <LayoutAntD style={{ height: '100vh', ...style }}>{children}</LayoutAntD>
  )
}

export default Layout
