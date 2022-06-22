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
            <CurrOrder OrderName={"98659865"} OrderId={"ORD-0948"} IconName={"shirt"} color="yellow"/>
            <CurrOrder OrderName={"ARIF"} OrderId={"ORD-0949"} IconName={"shirt"} color="pink"/>
            <CurrOrder OrderName={"SHIYAS"} OrderId={"ORD-09450"} IconName={"shirt"} color="lightGrey"/>
            <CurrOrder OrderName={"WALK IN CUSTOMER"} OrderId={"ORD-09451"} IconName={"shirt"} color="lightGrey"/>
        </div>
    </div>
  )
}

export default TrackBoard