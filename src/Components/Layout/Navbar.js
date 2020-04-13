import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SingedInLinks from './SingedInLinks';
import SingedOutLinks from './SingedOutLinks';
import {connect} from 'react-redux' ;

class Navbar extends Component{
    handleonClick=()=>{
        console.log("I am Clicked") // this is working 
       
    }
    render(){
        const {auth , profile} = this.props
        const link = auth.uid ? <SingedInLinks profile = {profile}/> :<SingedOutLinks/> // ternerary operator to decide if the user is logedin or log out
    return(
        <nav className="nav-wrapper  grey darken-4">
          <div className="container">
                <Link to = '/' data-target="mobile-demo" className="sidenav-trigger" onClick = {this.handleonClick}> {/*I need to give on handlefunction to the menu*/ }
                    <i className="material-icons">menu</i>
                </Link>
              
                <Link to = '/' className = "brand-logo">PlanMaker</Link>
                {link}
            </div>
        </nav>
    )
}
}
const mapStatetoProps=(state)=>{
    console.log(state)
    return{
        auth : state.firebase.auth,
        profile : state.firebase.profile

    }
}
export default connect(mapStatetoProps)(Navbar)