import React, { Component } from 'react'

class CreatePost extends Component {
    state ={
        input_text : '' ,
        textarea2 :''

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
           
                <h1 className="grey-text text-darken-4 center">Create Post</h1>
                <div class="row">
                <form  class="col s12" onSubmit = {this.handleonSubmit}>
                <div class="row">
                    <div class="input-field col s6 ">
                    <input id="input_text" type="text" data-length="10"  onChange= {this.handleonChange} />
                    <label for="input_text">Title</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12 ">
                    <textarea id="textarea2" class="materialize-textarea" onChange= {this.handleonChange}></textarea>
                    <label for="textarea2">Write post .....</label>
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
