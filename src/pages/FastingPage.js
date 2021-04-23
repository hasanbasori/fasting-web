import React, { useState, useEffect } from 'react'
import '../style/fastingpage.css'
import axios from 'axios'
// import { Button, Select } from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { Button, Row, Select, Typography, Modal, DatePicker, Space } from 'antd'
import Layout from '../components/layout'
import Content from '../components/layout/Content'
import Header from '../components/layout/Header'
import 'react-circular-progressbar/dist/styles.css'
import { calculatePercent, displayFastingTime } from '../utils/timing'

import moment from 'moment'

const { Title } = Typography

const STATUS = {
  IDLE: 'IDLE',
  FASTING: 'FASTING'
}
function FastingPage() {
  const [startF, setStartF] = useState(false)
  const handleClick = () => setStartF(!startF)

  const [plans, setPlans] = useState([])
  const [fastingHrs, setFastingHrs] = useState(0)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [fastingStatus, setFastingStatus] = useState(STATUS.IDLE)

  //effect
  useEffect(() => {
    fetchPostContents()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      fastingHrs &&
        fastingStatus === STATUS.FASTING &&
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1)
    }, 1000)

    return () => clearInterval(interval)
  })

  console.log(elapsedTime)
  async function fetchPostContents() {
    try {
      const { data } = await axios.get('http://localhost:8080/plans')
      setPlans(data)
    } catch (err) {
      console.error(err?.response.data.message)
    }
  }
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  function onChange(value, dateString) {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }

  function onOk(value) {
    console.log('onOk: ', value)
  }

  return (
    <Layout>
      <Header />
      <Content>
        <div className="fastingwrapper">
          <div className="fastingtime-box">
            <div className="fasting-box-component">
              <div className="planfasting">
                <Select
                  defaultValue="Choose your fasting plan"
                  style={{ width: '300px', marginTop: '35px' }}
                  onChange={(value) => {
                    const selectedPlan = Number(value.split(/[ |\/]/)[0])
                    setFastingHrs(selectedPlan)
                  }}
                >
                  {plans.map((plan) => {
                    return (
                      <option key={plan.id} value={plan.value}>
                        {plan.value}
                      </option>
                    )
                  })}
                </Select>
              </div>
              <Row align="middle" className="timefasting">
                <CircularProgressbar
                  value={
                    fastingHrs
                      ? calculatePercent(elapsedTime, fastingHrs * 60 * 60)
                      : 0
                  }
                  text={displayFastingTime(
                    fastingHrs && fastingStatus === STATUS.FASTING
                      ? elapsedTime
                      : 0
                  )}
                  strokeWidth={15}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    width: '50px',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    height: '50px',
                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(255, 155, 30, 0.5)`,
                    textColor: '#000000',
                    trailColor: '#e3e3e3',
                    backgroundColor: '#3e98c7'
                  })}
                />
              </Row>
              <Title level={4} style={{ minHeight: 24 }}>
                {fastingHrs
                  ? `${
                      !fastingStatus ? 'Selected' : 'Fasting'
                    } ${fastingHrs} Hours`
                  : ''}
              </Title>

              <div className="controlfasting">
                <Button
                  colorScheme="teal"
                  disabled={!fastingHrs}
                  onClick={() => {
                    setFastingStatus(
                      fastingStatus === STATUS.IDLE
                        ? STATUS.FASTING
                        : STATUS.IDLE
                    )
                    fastingStatus === STATUS.IDLE && setElapsedTime(0)
                  }}
                >
                  {fastingStatus === STATUS.IDLE ? 'Start fast' : 'End fast'}
                </Button>{' '}
                <Button
                  disabled={!fastingHrs}
                  colorScheme="teal"
                  onClick={showModal}
                >
                  Edit Fast
                </Button>{' '}
                <br></br>start fast at 13:12:00
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Modal
        title="EDIT FAST"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DatePicker showTime onChange={onChange} onOk={onOk} />
      </Modal>
    </Layout>
  )
}

export default FastingPage

//   <div classNane="planfasting"></div>
// <div className="timefasting"></div>
// <div classNane="controlfasting">
//   <div className="edit-fast"></div>
//   <div className="start-fast">

//   </div>
//   <div className="end-fast"></div>
// </div>
