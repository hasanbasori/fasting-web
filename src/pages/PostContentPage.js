import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import '../style/content.css'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'
import {
  Image,
  Menu,
  Modal,
  Button,
  Form,
  Input,
  Upload,
  Row,
  Card,
  Spin
} from 'antd'
import '../style/video.css'
import Layout from '../components/layout'
import Content from '../components/layout/Content'
import Header from '../components/layout/Header'
import styled from 'styled-components'
import SkeletonImage from 'antd/lib/skeleton/Image'
import {
  EditOutlined,
  EllipsisOutlined,
  CloseOutlined
} from '@ant-design/icons'

const ContentPageWrapped = styled.div`
  .video-card {
    width: 400px;
    /* height: 800px; */
    background-color: white;
    margin: 20px;
    margin-bottom: 20px;
  }

  .content-title {
    width: 100%;
    height: 20%;
  }
  .content-image {
    width: 100%;
    height: 30%;
  }
  .content-description {
    text-align: justify;
    text-justify: inter-word;
    width: 100%;
    height: 50%;
  }
  .ant-row.video-card-container {
    display: flex;
    justify-content: center;
  }
  .video-card-container {
    display: flex;
    margin: 10px;
  }
  p {
    font-size: 18px;
    font-weight: strong;
  }
`

const { Meta } = Card

function PostContentPage({}) {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [postContents, setPostContents] = useState([])
  const [loading, setLoading] = useState(false)
  const [editContentPost, setEditContentPost] = useState()
  const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false)
  const [contentFieldsEdit, setContentFieldsEdit] = useState({})

  //effect
  useEffect(() => {
    fetchPostContents()
  }, [])

  // hooks
  const [form] = Form.useForm()
  const [formEdit] = Form.useForm()
  const handleFileChange = (e) => {
    console.log(e.target)
    setFile(e.target.files[0])
  }
  let params = useParams()
  let history = useHistory()

  // function

  const handleUpload = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('image', file)
    formData.append('description', description)

    axios
      .post('http://localhost:8080/', formData)
      .then((res) => {
        setImage(res.data.image)
      })
      .catch((err) => {})
    form.resetFields()
  }

  function handleTitleChange(event) {
    setTitle(event.target.value)
  }
  function handleImageChange(event) {
    setImage(event.target.value)
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value)
  }

  async function handleAddPost({ title, description }) {
    let response = await axios.post('http://localhost:8080/content-posts/', {
      title,
      // image: image,
      description
    })
    console.log('res', response)

    setPostContents([response.data, ...postContents])

    // form.setFieldsValue({ title: '', description: '' })
    form.resetFields()
  }

  async function handleEditPost({ title, image, description }) {
    try {
      setLoading(true)
      await axios.put(
        `http://localhost:8080/content-posts/${contentFieldsEdit.id}`,
        {
          ...contentFieldsEdit,
          title,
          image: image ? image : contentFieldsEdit.image,
          description
        }
      )
      formEdit.setFieldsValue({ title: '', description: '', image: '' })
      await fetchPostContents()
      setIsModalVisibleEdit(false)
    } catch (err) {
      console.error(err?.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleDeleteContent(postContentId) {
    // console.log("postId", postId);
    try {
      setLoading(true)
      let response = await axios.delete(
        'http://localhost:8080/content-posts/' + postContentId
      )

      await fetchPostContents()
    } catch (err) {
      console.error(err.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  // useEffect(() => {

  //   EditContentPost()
  // }, [])
  console.log('modaledit', isModalVisibleEdit)

  async function fetchPostContents() {
    try {
      setLoading(true)
      const { data } = await axios.get('http://localhost:8080/content-posts')
      setPostContents(data)
    } catch (err) {
      console.error(err?.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    form.submit()
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const showEdit = () => {
    formEdit.setFieldsValue(contentFieldsEdit)
    setIsModalVisibleEdit(true)
  }

  const handleOkEdit = () => {
    formEdit.submit()
    setIsModalVisibleEdit(false)
  }

  const handleCancelEdit = () => {
    setIsModalVisibleEdit(false)
  }
  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  }

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!'
    },
    number: {
      range: '${label} must be between ${min} and ${max}'
    }
  }

  return (
    <Spin tip="รอแป๊บเดียว..." spinning={loading}>
      <ContentPageWrapped>
        <Layout className="video-wrapper">
          <Header />

          <Content className="content-container">
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="0">All Content</Menu.Item>
              <Menu.Item key="1">History</Menu.Item>
              <Menu.Item key="2">Liked Content</Menu.Item>
              <Menu.Item key="3">Read later</Menu.Item>
              <Menu.Item key="4" onClick={showModal}>
                Add Content
              </Menu.Item>
            </Menu>
            {loading ? (
              //   <div style={{ fontWeight: 700, fontSize: 48 }}>LOADING...</div>
              // ) : (
              //   <ul>
              //     {postContents.map((content) => {
              //       return <li>{content.title}</li>
              //     })}
              //   </ul>
              // )}

              <div style={{ fontWeight: 700, fontSize: 48 }}>LOADING...</div>
            ) : (
              <Row className="video-card-container">
                {postContents.map((content) => {
                  return (
                    <Card
                      key={content.id}
                      className="video-card"
                      hoverable
                      cover={
                        <Image
                          preview={false}
                          className="content-image"
                          src={content.image}
                        />
                      }
                      actions={[
                        <EditOutlined
                          key="edit"
                          // onClick={() =>

                          //   history.push('/content-posts/' + content.id)
                          // }
                          onClick={() => {
                            setContentFieldsEdit(content)

                            showEdit()
                          }}
                        />,
                        // <EllipsisOutlined key="ellipsis" />,
                        <CloseOutlined
                          key="setting"
                          onClick={function () {
                            console.log('hellox')

                            handleDeleteContent(content.id)
                          }}
                        />
                      ]}
                    >
                      <Meta
                        title={content.title}
                        description={
                          <div className="content-description">
                            {content.description}
                          </div>
                        }
                      />
                      {/* <span
                      onClick={function () {
                        handleDeleteContent(postContent.id)
                      }}
                    >
                      <strong>X</strong>
                    </span>

                    <Image
                      preview={false}
                      className="content-image"
                      src={content.image}
                    />
                    <div className="content-description">
                      {content.description}
                    </div> */}
                    </Card>
                  )
                })}
              </Row>
            )}
          </Content>
        </Layout>

        <Modal
          title="ADD NEW CONTENT"
          visible={isModalVisible}
          type="primary"
          htmlType="submit"
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Submit"
        >
          <Form
            {...layout}
            form={form}
            name="nest-messages"
            onFinish={handleAddPost}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[
                {
                  required: true
                }
              ]}
              onChange={handleTitleChange}
            >
              <Input />
            </Form.Item>

            <Form.Item name="image" label="Upload your image">
              <Upload>
                <Button
                  style={{ width: 313 }}
                  action="/upload.do"
                  listType="image"
                  onChange={handleImageChange}
                >
                  Clink to choose your image here.
                </Button>
              </Upload>
            </Form.Item>

            <Form.Item name="description" label="Description">
              <Input.TextArea onChange={handleDescriptionChange} />
            </Form.Item>
            <Form.Item
              wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            ></Form.Item>
          </Form>
        </Modal>
        <Modal
          title="EDIT CONTENT"
          visible={isModalVisibleEdit}
          type="primary"
          htmlType="submit"
          // onOk={handleOkEdit}
          onOk={handleOkEdit}
          onCancel={handleCancelEdit}
          okText="Submit"
        >
          <Form
            {...layout}
            form={formEdit}
            name="nest-messages"
            onFinish={handleEditPost}
            initialValues={contentFieldsEdit}
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[
                {
                  required: true
                }
              ]}
              onChange={handleTitleChange}
            >
              <Input />
            </Form.Item>

            <Form.Item name="image" label="Upload your image">
              <Upload>
                <Button
                  style={{ width: 313 }}
                  action="/upload.do"
                  listType="image"
                  onChange={handleImageChange}
                >
                  Clink to choose your image here.
                </Button>
              </Upload>
            </Form.Item>

            <Form.Item name="description" label="Description">
              <Input.TextArea onChange={handleDescriptionChange} />
            </Form.Item>
            <Form.Item
              wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            ></Form.Item>
          </Form>
        </Modal>
      </ContentPageWrapped>
    </Spin>
  )
}

export default PostContentPage
