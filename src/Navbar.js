
import React, { useState } from 'react'
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import { IoClose } from "react-icons/io5";

const Navbar=()=>{
    const[icon,seticon]=useState(false);
    const handleclick=()=>{      
            seticon(!icon);      
    }
    // const handleclick2=()=>{
    //     seticon(false);
    // }
    return(
        <div>
            <nav className={icon?'navlink':'navlink-active'}>
                <a href='index.html'>
                <svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" class="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" class="ccustom" fill="#17CF97"></path> </svg>
                </a>
                <div className='navlink'>
                    <ul >
                        <li>
                            <a href="index.html" className='active'>Home</a>
                        </li>
                        <li>
                            <a href="index.html">Contact</a>
                        </li>
                        <li>
                            <a href="index.html">About</a>
                        </li>
                        <li>
                            <a href="index.html">Track</a>
                        </li>
                    </ul>
                </div>
                {icon?<div id='mobile'onClick={handleclick}>
                
                <IoClose/>
                </div> :<div id='mobile'onClick={handleclick}>
                <GiHamburgerMenu/>
                
                </div>}
            </nav>
        </div>
    )
}
export default Navbar;



