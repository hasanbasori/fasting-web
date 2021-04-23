import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import Content from '../components/layout/Content'
import Header from '../components/layout/Header'
import '../style/video.css'
import { Menu, Modal, Form, Input, Row, Spin } from 'antd'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import {
  EditOutlined,
  EllipsisOutlined,
  CloseOutlined
} from '@ant-design/icons'

const VideoPageWrapped = styled.div`
  display: flex;
  .video-card {
    width: 300px;
    /* height: 250px; */
    background-color: white;
    margin: 20px;
    /* margin-bottom: 5px; */
  }

  .content-title {
    width: 100%;
    height: 20%;
  }
  .content-image {
    width: 100%;
    height: 50%;
  }
  .content-description {
    width: 100%;
    height: 30%;
  }
  .ant-row.video-card-container {
    display: flex;
    justify-content: center;
  }
  .video-card-container {
    display: flex;
    margin: 10px;
  }

  .ant-menu-item-selected {
    background-color: inherit !important;
  }

  p {
    font-size: 18px;
    font-weight: strong;
  }
`
function VideoPostPage() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [postVideo, setPostVideo] = useState([])
  const [loading, setLoading] = useState(false)

  //effect
  useEffect(() => {
    fetchPostVideo()
  }, [])

  // function
  async function fetchPostVideo() {
    try {
      setLoading(true)
      const { data } = await axios.get('http://localhost:8080/video-posts')
      setPostVideo(data)
    } catch (err) {
      console.error(err?.response.data.message)
    } finally {
      setLoading(false)
    }
  }
  async function handleDeletePostVideo(postVideoId) {
    // console.log("postId", postId);
    try {
      setLoading(true)
      let response = await axios.delete(
        'http://localhost:8080/video-posts/' + postVideoId
      )

      await fetchPostVideo()
    } catch (err) {
      console.error(err.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  const [form] = Form.useForm()

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

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <Spin tip="รอแป๊บเดียว..." spinning={loading}>
      <VideoPageWrapped>
        <Layout className="video-wrapper">
          <Header />
          <Content className="video-container">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="0">All Video</Menu.Item>
              <Menu.Item key="1">History</Menu.Item>
              <Menu.Item key="2">Liked Video</Menu.Item>
              <Menu.Item key="3">Watch later</Menu.Item>
              <Menu.Item key="4" onClick={showModal} className="not-active">
                Add Video
              </Menu.Item>
              <Modal
                title="ADD NEW VEDIO LIST"
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
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    name="title"
                    label="Tile"
                    rules={[
                      {
                        required: true
                      }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item name="link" label="URL link from Youtube" s>
                    <Input />
                  </Form.Item>

                  <Form.Item name="description" label="description">
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                  ></Form.Item>
                </Form>
              </Modal>
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
                {postVideo.map((video) => {
                  return (
                    <div className="video-card">
                      <CloseOutlined
                        key="setting"
                        onClick={function () {
                          console.log('hellox')

                          handleDeletePostVideo(video.id)
                        }}
                      />
                      <YouTube
                        className="content-image"
                        videoId={video.link.split('=')[1]}
                      />
                      <div className="content-title">
                        <p>
                          <strong>{video.title}</strong>
                        </p>
                      </div>
                    </div>
                  )
                })}
              </Row>
            )}
          </Content>
        </Layout>
      </VideoPageWrapped>
    </Spin>
  )
}

export default VideoPostPage
