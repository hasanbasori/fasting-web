import React from 'react'
import { Layout } from 'antd'

const { Content: ContentAntD } = Layout

function Content({ children }) {
  return <ContentAntD>{children}</ContentAntD>
}

export default Content
