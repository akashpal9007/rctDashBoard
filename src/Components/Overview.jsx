import React from 'react'
import './Overview.css'

const Overview = () => {
  return (
    <div className='overview'>
        <span>Overview</span>
        <div className='overSecHalf'>
          <img id='pieChart' src={require("../Icons/pie-chart.png")} alt="" />
        </div>
    </div>
  )
}

export default Overview