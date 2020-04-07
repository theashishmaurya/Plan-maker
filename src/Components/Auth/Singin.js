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
                <div class="row">
                <form  class="col s12" onSubmit = {this.handleonSubmit}>
                <div class="row">
                    <div class="input-field col s12 ">
                    <input id="email" type="email" class="validate"  onChange= {this.handleonChange}/>
                    <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12 ">
                        <input id="password" type="password" class="validate"  onChange= {this.handleonChange} />
                        <label for="password">Password</label>
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
