import React from 'react'
import './TrackBoard.css'
import CurrOrder from './CurrOrder'

const TrackBoard = () => {
  return (
    <div className='board'>
        <div className='board-top'>
          <span className='head'>Today's Delivery</span>
          <input type="text" placeholder='Search Here' />
          <select>
              <option>All Orders</option>
              <option>All Orders</option>
              <option>All Orders</option>
              <option>All Orders</option>
          </select>
        </div>
        <div className='CurrentOrders'>
            <CurrOrder OrderName={"98659865"} OrderId={"ORD-0948"} IconName={"shopping-basket"}/>
            <CurrOrder OrderName={"ARIF"} OrderId={"ORD-0949"} IconName={"shopping-basket"}/>
            <CurrOrder OrderName={"SHIYAS"} OrderId={"ORD-09450"} IconName={"shopping-basket"}/>
            <CurrOrder OrderName={"WALK IN CUSTOMER"} OrderId={"ORD-09451"} IconName={"shopping-basket"}/>
        </div>
    </div>
  )
}

export default TrackBoard