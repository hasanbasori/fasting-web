import React from 'react'
import '../style/homepage.css'

import { Typography, Carousel } from 'antd'
import Layout, { Content } from 'antd/lib/layout/layout'
import Header from '../components/layout/Header'

const { Title } = Typography

function HomePage() {
  const contentStyle = {
    height: '520px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
  }
  return (
    <Layout className="aaa">
      <Header />
      <Content>
        <div className="greeting-user">
          <Title as="h2" size="xl">
            Howdy!, User and welcome to our website.
          </Title>
        </div>
        <div className="reccomment-banner-wrap">
          <div className="reccomment-banner">
            <Carousel autoplay>
              <div>
                <Title level={3} style={contentStyle}>
                  1
                </Title>
              </div>
              <div>
                <Title level={3} style={contentStyle}>
                  2
                </Title>
              </div>
              <div>
                <Title level={3} style={contentStyle}>
                  3
                </Title>
              </div>
              <div>
                <Title level={3} style={contentStyle}>
                  4
                </Title>
              </div>
            </Carousel>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default HomePage
