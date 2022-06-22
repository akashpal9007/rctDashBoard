import React, { useContext } from 'react'
import './Navbar.css'
import { StateContext } from '../Contexts/ContextProvider'

const Navbar = () => {
  const {activeMenu, setActiveMenu} = useContext(StateContext);

  return (
    <div className='navbar'>
        <button id='menu' className='left-nav' onClick={()=>{setActiveMenu(!activeMenu)}}>
            <img className='leftNav-icons' src={require("../Icons/menu.png")} alt="" />
        </button>
        <div className='right-nav'>
            <img className='nav-icons' src={require("../Icons/plus.png")} alt="" />
            <img className='nav-icons' src={require("../Icons/label.png")} alt="" />
            <img className='nav-icons' src={require("../Icons/user2.png")} alt="" />
            <select>
            <option>English</option>
            <option>Hindi</option>
            <option>French</option>
            <option>Spanish</option>
        </select>
        </div>
    </div>
  )
}

export default Navbar