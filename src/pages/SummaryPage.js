import React from 'react'
import Layout from '../components/layout'
import Content from '../components/layout/Content'
import Header from '../components/layout/Header'

import styled from 'styled-components'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const SummaryPageWrapped = styled.div`
  width: fit-content;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: 80px auto 0 auto;

  .summary-box {
    padding: 10px;

    justify-content: center;
    text-align: center;
    align-items: center;
    width: 55vw;
    height: 40vh;
    border-radius: 10px;
    background-color: white;
    box-shadow: 4px 8px 8px 4px silver;
  }
  .summary-box-top {
    display: flex;
    height: 50%;
    width: 100%;
    border-bottom: 1px solid silver;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }
  .summary-box-buttom {
    display: flex;
    height: 50%;
    width: 100%;
  }
  .summary-block1 {
    width: 33.33%;
    height: 100%;
  }

  .summary-block {
    width: 33.33%;
    height: 100%;
    border-left: 1px solid silver;
  }
  .profile {
    display: flex;
  }
`

function SummaryPage() {
  return (
    <Layout>
      <Header />
      <Content>
    
        <SummaryPageWrapped className="summarywrapper">
        <div className="profile">
          {' '}
          <Avatar size={80} icon={<UserOutlined />} />{' '}
          <h1>Hasanbasori Samang</h1>
        </div>
          <div className="summary-box">
            <div className="summary-box-top">
              <div className="summary-block1"></div>
              <div className="summary-block"></div>
              <div className="summary-block"></div>
            </div>
            <div className="summary-box-buttom">
              <div className="summary-block1"></div>
              <div className="summary-block"></div>
              <div className="summary-block"></div>
            </div>
          </div>
        </SummaryPageWrapped>
      </Content>
    </Layout>
  )
}

export default SummaryPage
