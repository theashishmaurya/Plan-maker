import React, { Component } from 'react'
import {SingIn} from  '../../store/actions/authAction';
import {connect} from 'react-redux';

class Singin extends Component {
    state ={
        email : '' ,
        password :''

    } 
    

    handleonChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })

    }
    handleonSubmit=(e)=>{
        e.preventDefault()
        //console.log(this.state)
        //on submit we fire the action and in which we have given the action.
        this.props.SingIn(this.state)
        

    }
    render() {
        const {authError,authSuccess} = this.props
        return (
            <div className="container">
           
                <h1 className="grey-text text-darken-4 center">Sing In</h1>
                <div className="row">
                <form  className="col s12" onSubmit = {this.handleonSubmit}>
                <div className="row">
                    <div className="input-field col s12 ">
                    <input id="email" type="email" className="validate"  onChange= {this.handleonChange}/>
                    <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 ">
                        <input id="password" type="password" className="validate"  onChange= {this.handleonChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="container center ">
                
                    {authError ? <p className='red-text'>{authError}</p>:<p className = "green-text">{authSuccess}</p>} {/* if we have error we display Autherror or else we wont */}

                </div>
                <button className="btn black right" >Sing in</button>
           
            </form>
            </div>
            </div>
            

        )
            
    }
}
const mapStatetoProps=(state)=>{
    return{
        authError : state.auth.authError,
        authSuccess : state.auth.authSuccess

    }
}
// mapStatetoDispatch function to pass all the state to the action .
const mapStatetoDispatch=(dispatch)=>{
    return{
        SingIn : (credential)=>(dispatch(SingIn(credential))) // dispatching an action called singIn when object singIn is called and in that we are passing credential
    }
}

export default connect(mapStatetoProps, mapStatetoDispatch)(Singin) 
