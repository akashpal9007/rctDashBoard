import React from 'react'
import './CurrOrder.css'
const CurrOrder = ({OrderName, OrderId, IconName, color}) => {
  return (
    <div style={{borderColor: color}} className='currOrder'>
        <div className='currOrderDetails'>
            <span className='currOrderName'>{OrderName}</span>
            <span className='order-id'>{OrderId}</span>
        </div>
        <img src={require(`../Icons/${IconName}.png`)} alt="" />
    </div>
  )
}

export default CurrOrder