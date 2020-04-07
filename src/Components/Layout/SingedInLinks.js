import React from 'react';
import {NavLink} from 'react-router-dom';

const SingedInLinks =()=>{
    return(
    
        
    
        <ul id='nav-mobile' className="right hide-on-med-and-down">
        
            <li><NavLink to="/">New Project</NavLink></li>
            <li><NavLink to="/">Sing Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating black-text grey lighten-3">NN</NavLink></li>
        </ul>
     
    )
}

export default SingedInLinks;