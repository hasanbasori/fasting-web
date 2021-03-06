import React from 'react'
import { Button, Radio } from 'antd'
import { Link, Route } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'

function ButtonOnNavbar() {
  const facebookLink = 'https://www.facebook.com/Zero-Kcal-105648521654052'
  function handleChangeComponent(e) {
    console.log(e.target.value)
  }
  return (
    <div className="buttonOnNavbar">
      <Radio.Group value="large" onChange={handleChangeComponent}>
        <Radio.Button value="home">
          <Link to="/homepage">Home</Link>
        </Radio.Button>
        <Radio.Button value="video">
          <Link to="/video">Video</Link>
        </Radio.Button>
        <Radio.Button value="blog">
          <Link to="/content">Blog</Link>
        </Radio.Button>
        <Radio.Button value="fasting">
          <Link to="/fasting">Fasting</Link>
        </Radio.Button>
        <Radio.Button value="aboutUs">
          <Link to="/summary">Profile</Link>
        </Radio.Button>
        <Radio.Button value="logOut">
          <Link to="/login">Log out</Link>
        </Radio.Button>

        <Radio.Button value="facebook">
          <a
            target="_blank"
            href="https://www.facebook.com/Zero-Kcal-105648521654052"
          >
            <FaFacebook />
          </a>
        </Radio.Button>
      </Radio.Group>
    </div>
  )
}

export default ButtonOnNavbar
