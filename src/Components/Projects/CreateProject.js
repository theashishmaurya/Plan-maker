import React, { Component } from 'react'

class CreatePost extends Component {
    state ={
        input_text : '' ,
        textarea2 :''

    }
    handleonChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value // while id and objects in state are same so we  just set the value of text area with 
            // some id to the same spelled id of the state
        })

    }
    handleonSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        

    }
    render() {
        return (
            <div className="container">
           
                <h1 className="grey-text text-darken-4 center">Create Post</h1>
                <div className="row">
                <form  className="col s12" onSubmit = {this.handleonSubmit}>
                <div className="row">
                    <div className="input-field col s6 ">
                    <input id="input_text" type="text" data-length="10"  onChange= {this.handleonChange} />
                    <label htmlFor="input_text">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 ">
                    <textarea id="textarea2" className="materialize-textarea" onChange= {this.handleonChange}></textarea>
                    <label htmlFor="textarea2">Write post .....</label>
                    </div>
                </div>
                <button className="btn black right" >Post</button>
           
            </form>
            </div>
            </div>
            

        )
            
    }
}

export default CreatePost ; 
