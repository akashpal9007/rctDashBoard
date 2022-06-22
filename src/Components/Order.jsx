import React from 'react';
import './Order.css'

const Order = ({name, number, icon}) => {
  return (
    <div className='order'>
        <div className="orderDetails">
            <div className="orderType">{name}</div>
            <div className="orderNum">{number}</div>
        </div>
        <div className='orderIcon'>
            <img src={require(`../Icons/${icon}.png`)} alt="" />
        </div>
    </div>
  )
}

export default Order