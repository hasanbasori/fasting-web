import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

const { Content: ContentAntD } = Layout

const ContentStyled = styled(ContentAntD)`
  &.ant-layout-content {
    height: 100vh;
    background-color: white;
  }
`

function Content({ children, style }) {
  return <ContentStyled>{children}</ContentStyled>
}

export default Content
