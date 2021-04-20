import React from 'react'
import Layout from '../components/layout'
import Content from '../components/layout/Content'
import Header from '../components/layout/Header'
import '../style/summary.css'

function SummaryPage() {
  return (
    <Layout>
      <Header />
      <Content className="summarywrapper">
        <div className="summary-box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="summary-box-top">
            <div className="summary-block1"></div>
            <div className="summary-block"></div>
            <div className="summary-block"></div>
          </div>
          <div className="summary-box-buttom">
            <div className="summary-block1"></div>
            <div className="summary-block"></div>
            <div className="summary-block"></div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default SummaryPage
