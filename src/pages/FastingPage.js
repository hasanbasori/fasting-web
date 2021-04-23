import React, { useState, useEffect } from 'react'
import '../style/fastingpage.css'
import axios from 'axios'
// import { Button, Select } from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { Button, Select } from 'antd'
import Layout from '../components/layout'
import Content from '../components/layout/Content'
import Header from '../components/layout/Header'

function FastingPage() {
  const [startF, setStartF] = useState(false)
  const handleClick = () => setStartF(!startF)
  const [plans, setPlans] = useState([])
  const [fastingHrs, setFastingHrs] = useState(0)
  const [remainingHrs, setRemainingHrs] = useState(fastingHrs)

  //effect
  useEffect(() => {
    fetchPostContents()
  }, [])

  console.log(remainingHrs)
  async function fetchPostContents() {
    try {
      const { data } = await axios.get('http://localhost:8080/plans')
      setPlans(data)
    } catch (err) {
      console.error(err?.response.data.message)
    }
  }

  const percentage = 30
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
                    setRemainingHrs(selectedPlan)
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
              <div className="timefasting">
                <CircularProgressbar
                  value={remainingHrs}
                  text={`${remainingHrs}%`}
                  strokeWidth={15}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.6,
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
                    pathColor: `rgba(255, 155, 30,${percentage / 100})`,
                    textColor: '#000000',
                    trailColor: '#e3e3e3',
                    backgroundColor: '#3e98c7'
                  })}
                />
              </div>

              <div className="controlfasting">
                <Button colorScheme="teal" onClick={handleClick}>
                  {startF ? 'End fast' : 'Start fast'}
                </Button>
                <Button colorScheme="teal">Edit Fast</Button>
              </div>
            </div>
          </div>
        </div>
      </Content>
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
