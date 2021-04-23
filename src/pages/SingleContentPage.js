import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/'
import Header from '../components/layout/Header'
import Content from '../components/layout/Content'
import { Row, Col } from 'antd'

const SingleContentPageWrapped = styled.div`
  .ant-layout-content {
  }
  .content-box {
    justify-content: center;
    margin-top: 50px;
    width: 50%;
    height: 200px;
  }
`

function SingleContentPage() {
  return (
    <SingleContentPageWrapped>
      <Layout>
        <Header />
        <Content>
          <Row className="content-box">
            <Col>Title</Col>
            <Col>img</Col>
            <Col>Description</Col>
          </Row>
        </Content>
      </Layout>
    </SingleContentPageWrapped>
  )
}

export default SingleContentPage
