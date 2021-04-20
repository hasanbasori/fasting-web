import React from 'react'
import { Button, Radio } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

import { FaFacebook } from 'react-icons/fa'

function ButtonOnNavbar() {
  const facebookLink = 'https://www.facebook.com/Zero-Kcal-105648521654052'
  function handleChangeComponent(e) {
    console.log(e.target.value)
  }
  return (
    <div className="buttonOnNavbar">
      <Radio.Group value="large" onChange={handleChangeComponent}>
        <Radio.Button value="home">Home</Radio.Button>
        <Radio.Button value="video">Video</Radio.Button>
        <Radio.Button value="blog">Blog</Radio.Button>
        <Radio.Button value="fasting">Fasting</Radio.Button>
        <Radio.Button value="aboutUs">About Us</Radio.Button>
        <Radio.Button value="logOut">Log out</Radio.Button>
        <Radio.Button value="facebook">
          <FaFacebook />{' '}
        </Radio.Button>
      </Radio.Group>
      {/* <ButtonGroup spacing="1">
        <Button colorScheme="teal">Home</Button>
        <Button colorScheme="teal">Video</Button>
        <Button colorScheme="teal">Blog</Button>
        <Button colorScheme="teal">Fasting</Button>
        <Button colorScheme="teal">About Us</Button>
        <Button colorScheme="teal">Log out</Button>
        <Button
          onClick={() => window.open(facebookLink, "_blank")}
          colorScheme="facebook"
          leftIcon={<FaFacebook />}
        >
          Facebook
        </Button>
      </ButtonGroup> */}
    </div>
  )
}

export default ButtonOnNavbar
