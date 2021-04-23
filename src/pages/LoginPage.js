import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Row, Col, Button, Input, Form, Typography, Tag, Spin } from 'antd'
import Logo from '../components/logo/Logo'
import styled from 'styled-components'
import Layout from '../components/layout'
import Content from '../components/layout/Content'
import axios from 'axios'
import { StoreContext } from '../Context/StoreContextProvider'
import { CloseCircleOutlined } from '@ant-design/icons'

const { Title, Text } = Typography
const LoginPageWrapped = styled.div`
  width: fit-content;
  margin: 80px auto 0 auto;
  /* .login-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  } */
  /* .logoLogin {
    display: flex;
    text-align: center;
    width: 100%;
  } */
  .login-container {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 60vw;
    height: 60vh;
    border-radius: 10px;
    background-color: white;
    box-shadow: 4px 8px 8px silver;
    border: 1px solid rgb(223, 223, 223);
  }

  .input {
    width: 50%;
    /* border-radius: 5px; */
    height: 30px;
    border: 1px solid silver;
  }
  .welcome-row {
    width: 100%;
  }

  .welcome-back {
    display: flex;
    align-items: center;
    text-align: center;
    background-color: orange;
    border-radius: 0px 10px 10px 0px;
    height: 100%;
    color: whitesmoke;
  }
  .welcome {
    width: 100%;
    margin: 5px;
  }
  .ant-row.ant-form-item {
    margin: 5px;
  }
  img {
    width: 150px;
  }
`

function LoginPage() {
  const [error, setError] = useState('')

  const { setIsAuthenticated, isLoading, setIsLoading } = useContext(
    StoreContext
  )

  const history = useHistory()

  const handleSubmitLogin = async ({ username, password }) => {
    console.log(username, password)
    try {
      setIsLoading(true)
      const res = await axios.get('http://localhost:8080/users')
      const allUsers = res.data

      const foundUser = allUsers.find((user) => {
        return user.username === username && user.password === password
      })

      console.log('foundUser', foundUser)
      setIsAuthenticated(!!foundUser)
      foundUser
        ? history.push('/homepage')
        : setError('Username or Password is invalid!')
    } catch (err) {
      console.log(err.response.data.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <Content>
        <Spin size="large" tip="JUST MOMENT PLEASE..." spinning={isLoading}>
          <LoginPageWrapped className="login-wrapper">
            <Row className="login-container">
              <Col span={12} className="login-form">
                <div className="logoLogin">
                  <Logo />
                </div>
                <div>
                  <Title style={{ fontSize: 18 }}>
                    Sign in to your account
                  </Title>
                </div>
                <br />
                <Row justify="center" className="login-form">
                  <Col>
                    <Form onFinish={handleSubmitLogin}>
                      <Form.Item>
                        <Input
                          style={{ width: '300px' }}
                          placeholder="Email Address"
                        />
                      </Form.Item>
                      <Form.Item name="password">
                        <Input.Password placeholder="Password" />
                      </Form.Item>
                      <Form.Item>
                        <Button
                          htmlType="submit"
                          style={{
                            backgroundColor: '#319793',
                            color: 'white'
                          }}
                        >
                          Sign in
                        </Button>
                      </Form.Item>
                      {error && (
                        <Tag icon={<CloseCircleOutlined />} color="error">
                          {error}
                        </Tag>
                      )}
                    </Form>
                  </Col>
                </Row>
              </Col>
              <Col span={12} className="welcome-back">
                <Row justify="center" className="welcome-row">
                  <div className="welcome">
                    <Title style={{ marginBottom: 0, color: 'white' }}>
                      Welcome Back!
                    </Title>
                    <Text
                      style={{ marginBottom: 10, color: 'white' }}
                      fontSize="md"
                    >
                      To keep connected with us please login with your personal
                      info
                    </Text>

                    <br />

                    <Button
                      style={{ backgroundColor: '#319793', color: 'white' }}
                      size="sm"
                    >
                      <Link to="/register">Sign up</Link>
                    </Button>
                  </div>
                </Row>
              </Col>
            </Row>
          </LoginPageWrapped>
        </Spin>
      </Content>
    </Layout>
  )
}

export default LoginPage
