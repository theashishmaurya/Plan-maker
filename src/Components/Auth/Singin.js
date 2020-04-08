import React, { Component } from 'react'

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
        console.log(this.state)
        

    }
    render() {
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
                <button className="btn black right" >Sing in</button>
           
            </form>
            </div>
            </div>
            

        )
            
    }
}

export default Singin ; 
