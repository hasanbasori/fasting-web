import React from 'react'
import '../style/content.css'

import { Menu, Breadcrumb } from 'antd'
import '../style/video.css'
import Layout from '../components/layout'
import Content from '../components/layout/Content'
import Header from '../components/layout/Header'

function PostContentPage() {
  return (
    <Layout className="video-wrapper">
      <Header />
      <Content className="content-container">
        
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}> */}
        {/* <Menu.Item key="0">All Content</Menu.Item> */}
        {/* <Menu.Item key="1">History</Menu.Item> */}
        {/* <Menu.Item key="2">Liked Content</Menu.Item> */}
        {/* <Menu.Item key="3">Read later</Menu.Item> */}
        {/* <Menu.Item key="4">Add Content</Menu.Item> */}
        {/* </Menu> */}
      </Content>
    </Layout>
  )
}

export default PostContentPage
