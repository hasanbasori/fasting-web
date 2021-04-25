import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
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
import { StoreContext } from '../Context/StoreContextProvider'
import '../style/register.css'
import Logo from '../components/logo/Logo'
import localStorageService from '../services/localStorageService'
import moment from 'moment'

const RegisterPageWrapped = styled.div`
  width: fit-content;
  margin: 80px auto 0 auto;

  .logo {
    text-align: center;
  }
  .welcomeBack {
    border-radius: 0 !important;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: orange;
    border-radius: 0px 10px 10px 0px;
    width: 50%;
    height: auto;
    color: whitesmoke;
  }

  .welcome-container {
    overflow: hidden;
  }

  .register-container,
  .welcome-container {
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
  .video-card {
    border-radius: 0 !important;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: orange;
    border-radius: 0px 10px 10px 0px;
    width: 50%;
    height: auto;
    color: whitesmoke;
  }
`

const { Text, Title } = Typography

function RegisterPage() {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    nickName: '',
    birthDate: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    image: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const handleClick = () => setShowPassword(!showPassword)
  const handleConfirmClick = () => setShowConfirmPassword(!showConfirmPassword)
  const { setIsAuthenticated, isLoading, setIsLoading } = useContext(
    StoreContext
  )

  const [startDate, setStartDate] = useState(new Date())

  const [error, setError] = useState({})

  // const { setIsAuthenticated } = useContext(AuthContext)

  const history = useHistory()

  const handleInputChange = (values) => {
    let id, value, date, name
    if (!values.target) {
      date = moment(values).format()
      console.log('date:', date)
      setInput((prev) => ({ ...prev, birthDate: date }))
    } else if (values.target.id) {
      console.log('target :>> ', values.target)
      id = values.target.id
      value = values.target.value
      setInput((prev) => ({ ...prev, [id]: value }))
    } else if (values.target.name) {
      name = values.target.name
      value = values.target.value
      setInput((prev) => ({ ...prev, [name]: value }))
    }

    if (id === 'firstName') {
      if (!value) {
        setError((prev) => ({ ...prev, firstName: 'First name is required' }))
      }
    }

    if (id === 'lastName') {
      if (!value) {
        setError((prev) => ({ ...prev, lastName: 'Last name is required' }))
      }
    }
    if (id === 'nickName') {
      if (!value) {
        setError((prev) => ({ ...prev, nickName: 'Nickname is required' }))
      }
    }
    if (!values.target) {
      if (!value) {
        setError((prev) => ({
          ...prev,
          birthDate: 'Please input your birth date'
        }))
      }
    }
    if (id === 'email') {
      if (!value) {
        setError((prev) => ({ ...prev, email: 'Email is required' }))
      } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        )
      ) {
        setError((prev) => ({ ...prev, email: 'Invalid email address' }))
      } else {
        setError((prev) => ({ ...prev, email: false }))
      }
    }
    if (id === 'password') {
      if (!value) {
        setError((prev) => ({ ...prev, password: 'Password is required' }))
      }
    }
    if (id === 'confirmPassword') {
      if (!value) {
        setError((prev) => ({
          ...prev,
          password: 'Confirm password is required'
        }))
      }
    }
    if (id === 'img') {
      if (!value) {
        setError((prev) => ({
          ...prev,
          img: 'Please ,Choose your Image profile'
        }))
      }
    }
  }

  const registerForm = async ({
    firstName,
    lastName,
    NickName,
    birthDate,
    email,
    password,
    confirmPassword,
    role,
    image
  }) => {
    try {
      setIsLoading(true)
      const req = await axios.post('http://localhost:8080/users')
      const newUser = req.body
    } catch (err) {
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmitRegister = async () => {
    console.log('hello sending')
    const res = await axios.post('http://localhost:8080/users', input)
    history.push('/homepage')
    console.log(res)
  }

  function normFile(values) {
    console.log('Upload event:', values)

    if (Array.isArray(values)) {
      return values
    }

    return values && values.fileList
  }

  return (
    <RegisterPageWrapped>
      <Row className="welcome-container">
        {console.log(input)}
        <Col className="welcomeBack">
          <div className="welcome">
            <h1 style={{ color: 'white' }}>Hello, Friend!</h1>
            <p>Enter your personal details and start journal with us</p>

            <Button type="primary" style={{ backgroundColor: '#319793' }}>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </Col>

        <Col className="register-form">
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
                <Form className="login-form" onFinish={handleSubmitRegister}>
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item name="firstName" rules={[{ required: true }]}>
                        <Input
                          placeholder="First Name"
                          value={input.firstName}
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="lastName" rules={[{ required: true }]}>
                        <Input
                          placeholder="Last Name"
                          value={input.lastName}
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item name="nickName" rules={[{ required: true }]}>
                        <Input
                          placeholder="nickName"
                          value={input.nickName}
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        noStyle
                        id="birthDate"
                        name="birthDate"
                        rules={[{ required: true }]}
                      >
                        <DatePicker
                          style={{ width: '100%' }}
                          value={input.birthDate}
                          id="birthDate"
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item name="email" rules={[{ required: true }]}>
                    <Input
                      placeholder="Email Address"
                      value={input.email}
                      onChange={handleInputChange}
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      { required: true, message: 'please enter this form' }
                    ]}
                  >
                    <Input.Password
                      placeholder="Password"
                      placeholder="รหัสผ่าน"
                      value={input.password}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                  <Form.Item
                    name="confirmPassword"
                    rules={[
                      { required: true, message: 'please re enter password' },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                          }
                          return Promise.reject('password not match')
                        }
                      })
                    ]}
                  >
                    <Input.Password
                      placeholder="Confirm Password"
                      value={input.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </Form.Item>

                  <Form.Item
                    name="userType"
                    label="Please select user type"
                    rules={[{ required: true }]}
                  >
                    <Radio.Group
                      id="role"
                      name="role"
                      value={input.role}
                      onChange={handleInputChange}
                    >
                      <Radio value={'user'} defaultChecked="true">
                        User
                      </Radio>
                      <Radio value={'creator'}>Creator</Radio>
                    </Radio.Group>
                  </Form.Item>

                  {/* <Form.Item
                    name="profileImage"
                    valuePropName="profileImage"
                    getValueFromEvent={normFile}
                    extra="longgggggggggggggggggggggggggggggggggg"
                    noStyle
                  >
                    <Upload
                      name="logo"
                      action="/upload.do"
                      listType="picture"
                      value={input.img}
                      onChange={handleInputChange}
                    >
                      <Button icon={<UploadOutlined />}>
                        CLICK TO UPLOAD YOUR PROFILE PICTURE HERE.
                      </Button>
                    </Upload>
                  </Form.Item> */}
                  <br />
                  <Row justify="center">
                    <Button
                      type="primary"
                      style={{ backgroundColor: '#319793' }}
                      onClick={handleSubmitRegister}
                    >
                      Sign Up
                    </Button>
                    {error.email && (
                      <span class="help-block" style={{ color: 'red' }}>
                        {error.email}
                      </span>
                    )}
                  </Row>
                </Form>
              </Row>
            </Col>
          </div>
        </Col>
      </Row>
    </RegisterPageWrapped>
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
