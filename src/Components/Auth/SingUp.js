import React, { Component } from 'react'

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
        console.log(this.state)
    }


    render() {
        return (
            <div className = "container">
            <h1 className="grey-text text-darken-4 center">Sing Up</h1>
            
                <div className="row">
                <form className="col s12"  onSubmit = {this.handleonSubmit}>
                    <div className="row">
                    <div className="input-field col s6">
                        <input  id="first_name" type="text" className="validate" onChange= {this.handleonChange} />
                        <label for="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate"  onChange= {this.handleonChange}/>
                        <label for="last_name">Last Name</label>
                    </div>
                    </div>
                    
                    <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate"  onChange= {this.handleonChange}/>
                        <label for="password">Password</label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12">
                        <input id="confirm_password" type="password" className="validate"  onChange= {this.handleonChange}/>
                        <label for="confirm_password">Confirm Password</label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate"  onChange= {this.handleonChange}/>
                        <label for="email">Email</label>
                    </div>
                    </div>
                    <button className="btn black right" >Sing Up</button>
                    
                </form>
                </div>
                </div>
                    
                
                
              
          
        )
    }
}

export default SingUp
