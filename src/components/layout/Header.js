import React from 'react'
import { Layout, Row, Typography } from 'antd'
import styled from 'styled-components'
import { typography } from 'styled-system'
import ButtonOnNavbar from '../buttons/ButtonOnNavbar'

const { Header: HeaderAntD } = Layout
const { Title: TitleAntD } = Typography

const Head = styled(HeaderAntD)`
  background-color: orange;

  .logo-title {
    margin: auto 0;
  }
`

const Title = styled(TitleAntD)`
  ${typography} /* font-weight: 700 !important; */
  color: white !important
`

function Header() {
  return (
    <Head>
      <Row justify="space-between">
        <Row align="middle">
          <img src="logo.png" alt="logo" />
          <Title fontWeight={700} className="logo-title">
            ZeroKcal
          </Title>
        </Row>

        <ButtonOnNavbar />
      </Row>
    </Head>
  )
}

export default Header
