import React from 'react'
import './Orders.css'
import Order from './Order'

const Orders = () => {
  return (
    <div className='orders'>
        <Order name="PENDING ORDERS" number="202" icon="shopping-basket"/>
        <Order name="PROCESSING ORDER" number="99" icon="science"/>
        <Order name="READY TO DELIVER" number="263" icon="like"/>
        <Order name="DELIVERED ORDERS" number="345" icon="check"/>
    </div>
  )
}

export default Orders