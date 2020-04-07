import React from 'react';
import {NavLink} from 'react-router-dom';

const SingedOutLinks =()=>{
    return(
    
        
    
        <ul id='nav-mobile' className="right hide-on-med-and-down">
        
            <li><NavLink to="/">Sing In</NavLink></li>
            <li><NavLink to="/">Sing Up</NavLink></li>
            
        </ul>
     
    )
}

export default SingedOutLinks;