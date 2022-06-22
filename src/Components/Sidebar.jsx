import React, {useContext} from 'react';
import './Sidebar.css'
import  {StateContext}  from '../Contexts/ContextProvider';

const Sidebar = () => {
    const {activeMenu} = useContext(StateContext);

  return (
      <>
        <div className={activeMenu ? "Sidebar" : "UnSidebar"}>
            <div className='mainlogo'>
                <img class='icon-img' src={require(`../Icons/gallery.png`)} alt="" />
                {activeMenu && <span className='menu-text'>LAUNDRY</span>}
            </div>
            <div className="menu">
                <div>
                    <img class='icon-img' src={require("../Icons/hut.png")} alt="" />
                    {activeMenu && <span className='menu-text'>Dashboard</span>}
                </div>
                <div>
                <img class='icon-img' src={require("../Icons/tag.png")} alt="" />
                    {activeMenu && <span className='menu-text'>Pos</span>}
                </div>
                <div>
                <img class='icon-img' src={require("../Icons/shopping-basket.png")} alt="" />
                    {activeMenu && <span className='menu-text'>Orders</span>}
                    </div>
                <div>
                <img class='icon-img' src={require("../Icons/list.png")} alt="" />
                    {activeMenu && <span className='menu-text'>Order Status Screen</span>}
                </div>
                <div>
                    <img class='icon-img' src={require("../Icons/notebook.png")} alt="" />
                    {activeMenu && <span className='menu-text'>Expense</span>}
                </div>
                <div>
                    <img class='icon-img' src={require("../Icons/user.png")} alt="" />
                    {activeMenu && <span className='menu-text'>Customers</span>}
                </div>
                <div>
                    <img class='icon-img' src={require("../Icons/tag2.png")} alt="" />
                    {activeMenu && <span className='menu-text'>Services</span>}
                </div>
                <div>
                    <img class='icon-img' src={require("../Icons/bar-graph.png")} alt="" />
                    {activeMenu && <span className='menu-text'>Reports</span>}
                </div>
                <div>
                    <img class='icon-img' src={require("../Icons/settings.png")} alt="" />
                    {activeMenu && <span className='menu-text'>Tools</span>}
                </div>
                <div>
                    <img class='icon-img' src={require("../Icons/power-off.png")} alt="" />
                    {activeMenu && <span className='menu-text'>Logout</span>}
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar