import React, { Component } from 'react';
import {singUp} from '../../store/actions/authAction'
import {connect} from 'react-redux'

 class SingUp extends Component {
    state ={
        email : '' ,
        password :'',
        confirm_password: '',
        first_name:'',
        last_name : '',
        



    }
    handleonChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })

    }
    handleonSubmit=(e)=>{
        e.preventDefault()
        //console.log(this.state)
        // // PassWord and confirm password validator 
        // // const {password , confirm_password} = this.state
        // // if (confirm_password !== password){
        // //     alert("Password doesn't match")
        // }
        // else {
        this.props.singUp(this.state) 
        
    }


    render() {
        const {authError} = this.props
        return (
            <div className = "container">
            <h1 className="grey-text text-darken-4 center">Sing Up</h1>
            
                <div className="row">
                <form className="col s12"  onSubmit = {this.handleonSubmit}>
                    <div className="row">
                    <div className="input-field col s6">
                        <input  id="first_name" type="text" className="validate" onChange= {this.handleonChange} />
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate"  onChange= {this.handleonChange}/>
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                    </div>
                    
                    <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate"  onChange= {this.handleonChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12">
                        <input id="confirm_password" type="password" className="validate"  onChange= {this.handleonChange}/>
                        <label htmlFor="confirm_password">Confirm Password</label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate"  onChange= {this.handleonChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    </div>
                    <button className="btn black right" >Sing Up</button>
                    <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
                </form>
                </div>
                </div>
                    
                
                
              
          
        )
    }
}
const mapStatetoProps=(state)=>{
    return{
        authError : state.auth.authError
    }
    
}
const mapDispatchtoProps =(dispatch)=>{
    return{
        singUp : (creds) => dispatch(singUp(creds))
    }
}


export default connect(mapStatetoProps,mapDispatchtoProps)(SingUp);
