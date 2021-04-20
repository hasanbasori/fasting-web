import React from 'react'
import '../style/fastingpage.css'
// import { Button, Select } from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { Button, Select } from 'antd'
import Layout from '../components/layout'
import Content from '../components/layout/Content'
import Header from '../components/layout/Header'

function FastingPage() {
  const [startf, setStartf] = React.useState(false)
  const handleClick = () => setStartf(!startf)

  const percentage = 30
  return (
    <Layout>
      <Header />
      <Content>
        <div className="fastingwrapper">
          <div className="fastingtime-box">
            <div className="fasting-box-component">
              <div className="planfasting">
                <Select style={{ width: '300px', marginTop: '35px' }}>
                  <option value="option0">Choose your fasting plan</option>
                  <option value="option1">12/12</option>
                  <option value="option2">16/8</option>
                  <option value="option3">18/6</option>
                  <option value="option5">20/4</option>
                  <option value="option6">22/2</option>
                  <option value="option7">23/1</option>
                  <option value="option8">24 h.</option>
                  <option value="option9">48 h.</option>
                  <option value="option10">72 h.</option>
                </Select>
              </div>
              <div className="timefasting">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
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
                  {startf ? 'End fast' : 'Start fast'}
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
