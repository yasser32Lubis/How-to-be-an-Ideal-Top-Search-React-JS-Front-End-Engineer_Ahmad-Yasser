import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const AboutSidebarData = [
    {
        tittle : 'Home',
        path : '/',
        icon : <AiIcons.AiFillHome/>,
        cName :'nav-text'
    },{
        tittle : 'About App',
        path : '/about/about-app',
        icon : <IoIcons.IoMdPeople/>,
        cName :'nav-text'
    },{
        tittle : 'About Author',
        path : '/about/about-author',
        icon : <IoIcons.IoMdPeople/>,
        cName :'nav-text'
    }
]
