import React, { useState } from 'react'
import {
  DatePicker,
  Typography,
  Radio,
  Button,
  Form,
  Input,
  Row,
  Col,
  Upload
} from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import '../style/register.css'

import '../style/register.css'
import Logo from '../components/logo/Logo'

const Comp = styled.div`
  .register-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
    height: 80vh;
    border-radius: 10px;
    background-color: white;
    box-shadow: 4px 8px 8px silver;
    border: 1px solid rgb(223, 223, 223);
  }
  .ant-form-item {
    margin-bottom: 5px;
  }

  .ant-upload.ant-upload-select.ant-upload-select-picture {
    width: 100%;
  }
  .ant-col.ant-form-item-label {
    width: 100%;
    text-align: left;
  }
  .ant-col.ant-form-item-control {
    text-align: left;
  }
  /*.input {
    width: 300px;
    height: 30px;
    border-radius: 5px;
    padding: 2px;
    margin: 3px;
  }
  .input-name {
    width: 150px;
    height: 30px;
    border-radius: 5px;
    padding: 2px;
    margin: 2px;
    border: 1px 30px 0 0 solid silver;
  }
  .greeting-friends {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orange;
    border-radius: 10px 0 0 10px;

    width: 50%;
    height: 100%;
    color: white;
  }

  .login-form {
    width: 50%;
  } */
`

const { Text, Title } = Typography

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const handleClick = () => setShowPassword(!showPassword)
  const handleConfirmClick = () => setShowConfirmPassword(!showConfirmPassword)

  const [startDate, setStartDate] = useState(new Date())

  function normFile(e) {
    console.log('Upload event:', e)

    if (Array.isArray(e)) {
      return e
    }

    return e && e.fileList
  }

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <div className="welcomeBack">
          <div className="welcome">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journal with us</p>

            <Button type="primary" style={{ backgroundColor: '#319793' }}>
              Sign In
            </Button>
          </div>
        </div>

        <div className="register-form">
          <div className="logo">
            <img
              className="img"
              src="Blue and Orange Technology Company Logo.png"
              alt=""
            />
            <h2 level={2}>Create Account</h2>
          </div>
          <div className="form-register">
            <Col span={12}>
              <Row justify="center">
                <Form
                  className="login-form"
                  onFinish={(values) => console.log(values)}
                >
                  <Row gutter={8}>
                    <Col>
                      <Form.Item name="firstName">
                        <Input placeholder="First Name" />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item name="lastName">
                        <Input placeholder="Last Name" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col>
                      <Form.Item name="nickName">
                        <Input placeholder="Nick Name" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item noStyle name="birthDate">
                        <DatePicker style={{ width: '100%' }} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item name="email">
                    <Input placeholder="Email Address" />{' '}
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                  {/* <Form.Item name="password"> */}

                  {/* </Form.Item> */}
                  <Form.Item name="confirmPassword">
                    <Input.Password placeholder="Confirm Password" />
                  </Form.Item>

                  <Form.Item name="userType" label="Please select user type">
                    <Radio.Group>
                      <Radio>User</Radio>
                      <Radio>Creator</Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item
                    name="profileImage"
                    valuePropName="profileImage"
                    getValueFromEvent={normFile}
                    extra="longgggggggggggggggggggggggggggggggggg"
                    noStyle
                  >
                    <Upload name="logo" action="/upload.do" listType="picture">
                      <Button icon={<UploadOutlined />}>
                        PLEASE, UPLOAD YOUR PROFILE PICTURE HERE.
                      </Button>
                    </Upload>
                  </Form.Item>
                  <br />
                  <Button type="primary" style={{ backgroundColor: '#319793' }}>
                    Sign Up
                  </Button>
                </Form>
              </Row>
            </Col>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

//  <div className="register-wrapper">
// <Row className="register-container" justify="center" align="middle">
//   <Row>
//     <div className="welcome">
//       <div className="greeting-friends">
//         <div className="welcome">
//           <Title level={2} style={{ width: '100%' }}>
//             Hello, Friend!
//           </Title>
//           <Text fontSize="md" mb="20px">
//             Enter your personal details and start journal with us
//           </Text>
//           <br />
//           <Button type="primary" style={{ backgroundColor: '#319793' }}>
//             Sign in
//           </Button>
//         </div>
//       </div>
//     </div>
//     <Col span={12}>
//       <Row justify="center">
//         <div className="logo">
//           <Logo />
//         </div>
//         <Title level={2}>Create Account</Title>
//         <Form
//           className="login-form"
//           onFinish={(values) => console.log(values)}
//         >
//           <Row gutter={8}>
//             <Col>
//               <Form.Item name="firstName">
//                 <Input placeholder="First Name" />
//               </Form.Item>
//             </Col>
//             <Col>
//               <Form.Item name="lastName">
//                 <Input placeholder="Last Name" />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={8}>
//             <Col>
//               <Form.Item name="nickName">
//                 <Input placeholder="Nick Name" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item noStyle name="birthDate">
//                 <DatePicker style={{ width: '100%' }} />
//               </Form.Item>
//             </Col>
//           </Row>

//           <Form.Item name="email">
//             <Input placeholder="Email Address" />
//           </Form.Item>
//           <Form.Item name="password">
//             <Input.Password placeholder="Password" />
//           </Form.Item>
//           <Form.Item name="confirmPassword">
//             <Input.Password placeholder="Confirm Password" />
//           </Form.Item>

//           <Form.Item name="userType" label="Please select user type">
//             <Radio.Group>
//               <Radio>User</Radio>
//               <Radio>Creator</Radio>
//             </Radio.Group>
//           </Form.Item>

//           <Form.Item
//             name="profileImage"
//             valuePropName="profileImage"
//             getValueFromEvent={normFile}
//             extra="longgggggggggggggggggggggggggggggggggg"
//             noStyle
//           >
//             <Upload name="logo" action="/upload.do" listType="picture">
//               <Button icon={<UploadOutlined />}>
//                 PLEASE, UPLOAD YOUR PROFILE PICTURE HERE.
//               </Button>
//             </Upload>
//           </Form.Item>
//           <br />
//           <Button type="primary" style={{ backgroundColor: '#319793' }}>
//             Sign Up
//           </Button>
//         </Form>
//       </Row>
//     </Col>
//   </Row>
// </Row>
// </div>
