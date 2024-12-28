import React, { useContext } from 'react'
import { createContext } from 'react';
import { AdminContext } from '../../../context/AdminContext';

export default function Index() {
  const {sideBar, setSideBar} = useContext(AdminContext);
  return (
    <div>
     <div className="nav_right_container">
          {/* <span
            id="toggle"
            className="fa fa-toggle-off"
            style={{cursor: 'pointer'}}></span> */}

           <span
            id="toggle"
            className={sideBar? "fa fa-toggle-off":"fa fa-toggle-off"}
            style={{cursor: 'pointer'}} onClick={setSideBar()}>
          
            </span> 
            
        </div>    
    </div>
  )
}
