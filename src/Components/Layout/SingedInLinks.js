import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {SingOut} from '../../store/actions/authAction'

const SingedInLinks =(props)=>{
    return(
    
        
    
        <ul id='nav-mobile' className="right hide-on-med-and-down">
        
            <li><NavLink to="/Create">New Project</NavLink></li>
            <li><a onClick ={()=>{props.SingOut()}}>Sing Out</a></li>
            <li><NavLink to='/' className="btn btn-floating black-text grey lighten-3">{props.profile.initial}</NavLink></li>
        </ul>
     
    )
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        SingOut : ()=>(dispatch(SingOut()))
    }
}

export default connect(null,mapDispatchtoProps)(SingedInLinks);