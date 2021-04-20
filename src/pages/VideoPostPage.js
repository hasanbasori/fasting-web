import React from 'react'
import Layout from '../components/layout'
import Content from '../components/layout/Content'
import Header from '../components/layout/Header'
import '../style/video.css'
import { Menu } from 'antd'

function VideoPostPage() {
  return (
    <Layout className="video-wrapper">
      <Header />
      <Content className="video-container">
        {/* <Layout className="layout"> */}
        {/* <Header> */}
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="0">All Video</Menu.Item>
          <Menu.Item key="1">History</Menu.Item>
          <Menu.Item key="2">Liked Video</Menu.Item>
          <Menu.Item key="3">Watch later</Menu.Item>
          <Menu.Item key="4">Add Video</Menu.Item>
        </Menu>
        {/* </Header> */}
        <Content style={{ padding: '0 50px' }}></Content>
        {/* </Layout> */},
      </Content>
    </Layout>
  )
}

export default VideoPostPage
