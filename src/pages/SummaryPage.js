import React, { useState } from 'react'
import Layout from '../components/layout'
import Content from '../components/layout/Content'
import Header from '../components/layout/Header'
import axios from 'axios'
import styled from 'styled-components'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import userEvent from '@testing-library/user-event'

const SummaryPageWrapped = styled.div`
  width: fit-content;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: 30px auto 0 auto;

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
    /* display: flex;
    flex-direction: column; */
  }
  .profile-component {
    display: flex;
    flex-direction: column;
  }
`

function SummaryPage() {
  const [getName, setGetName] = useState()
  const [loading, setLoading] = useState(false)

  async function fetchUsers() {
    try {
      setLoading(true)
      const { data } = await axios.get('http://localhost:8080/users/')
      setGetName(data)
    } catch (err) {
      console.error(err?.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  async function getProfileName(user) {
    try {
      setLoading(true)
      const { data } = await axios.get('http://localhost:8080/users/')
      setGetName(data)
    } catch (err) {
      console.error(err?.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <Header />
      <Content>
        <SummaryPageWrapped className="summarywrapper">
          <div className="profile-component">
            <div className="profile">
              <Avatar size={80} icon={<UserOutlined />} />{' '}
              <h1>
                {' '}
                Hasanbasori Samang
                {/* {`${users.id.name} ${users.id.lastName}`} */}
              </h1>
            </div>
            <br />
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
          </div>
        </SummaryPageWrapped>
      </Content>
    </Layout>
  )
}

export default SummaryPage
