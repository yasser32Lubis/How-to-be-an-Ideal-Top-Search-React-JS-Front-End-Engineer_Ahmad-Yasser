import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import '../css/Navbar.css';
import { IconContext } from 'react-icons/lib';
import { HomeSidebarData } from './HomeSidebarData';


function HomeNavbar() {
    const [sidebar, setSideBar] = useState(false);
    const showSidebar = () => setSideBar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{color: 'rgb(255, 98, 0)'}}>
        <div className='navbar'>
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={ sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar} >
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {HomeSidebarData.map((item, index) =>{
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.tittle}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </IconContext.Provider>
        
    </>
  )
}

export default HomeNavbar;