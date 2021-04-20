import React, { useState } from 'react'

import '../style/login.css'
import { Row, Button, Input, Form, Typography } from 'antd'
import Logo from '../components/logo/Logo'

const { Title, Text } = Typography

function LoginPage() {
  const [password, setPassword] = useState(false)
  const handleClick = () => setPassword(!password)

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-form">
          <form action="">
            <div className="logoLogin">
              <Logo />
            </div>
            <div>
              <Title as="h2" size="md" mt="10px">
                Sign in to your account
              </Title>
            </div>
            <br />
            <div className="login-form">
              <Row direction="column">
                <div>
                  <Form w="460px" id="email" isRequired>
                    <Input w="450px" placeholder="Email address" m="7.5px" />
                  </Form>
                </div>

                <div>
                  {/* <InputGroup w="450px" size="md" m="7.5px">
                    <Input
                      pr="4.5rem"
                      type={password ? 'text' : 'password'}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {password ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup> */}
                </div>
              </Row>
            </div>
            <br />
            <div>
              <Button colorScheme="teal" size="sm">
                Sign in
              </Button>
            </div>
          </form>
        </div>
        <div className="welcomeBack">
          <div className="welcome">
            <Title as="h2" size="xl">
              Welcome Back!
            </Title>
            <Text fontSize="md">
              To keep connected with us please login with your personal info
            </Text>

            <br />

            <Button colorScheme="teal" size="sm">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
