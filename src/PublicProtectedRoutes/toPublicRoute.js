import React from 'react'
import { Redirect ,Route } from "react-router"

import {connect} from "react-redux"
//function to show private or auth components
const PublicRoute =({component : Component,auth, ...rest})=>{
    return(
    <Route {...rest} render={props=>
        !auth.uid?<Component {...props}/>: <Redirect exact to = '/' />
    } />
    )
}

const mapStatetoProps = (state) =>{
    return{
        auth : state.firebase.auth
    }
}

export default connect(mapStatetoProps)(PublicRoute)


