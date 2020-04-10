import React, { Component } from 'react'
import createProject from '../../store/actions/projectAction';
import {connect} from 'react-redux';

class CreatePost extends Component {
    state ={
        title : '' ,
        content :''

    }
    handleonChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value // while id and objects in state are same so we  just set the value of text area with 
            // some id to the same spelled id of the state
        })

    }
    handleonSubmit=(e)=>{
        e.preventDefault()
        //console.log(this.state)
        this.props.createproject(this.state) // passing the state of the project to the action .
        this.setState({
            title : '' ,
            content :''
            
        })
        

    }
    render() {
        return (
            <div className="container">
           
                <h1 className="grey-text text-darken-4 center">Create Post</h1>
                <div className="row">
                <form  className="col s12" onSubmit = {this.handleonSubmit}>
                <div className="row">
                    <div className="input-field col s6 ">
                    <input id="title" type="text" data-length="10"  onChange= {this.handleonChange} value = {this.state.title} />
                    <label htmlFor="input_text">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 ">
                    <textarea id="content" className="materialize-textarea" onChange= {this.handleonChange} value = {this.state.content}></textarea>
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
const mapDispatchtoProps=dispatch=>{
    // we will be returning an
    return{
        createproject : (project)=>dispatch(createProject(project))// here we created an object and object contain a function and in that function a 
        // parameter project is passed that function is also defined as a dispatch function which takes createProject action and passes the project to the action.

    }

}

export default connect(null,mapDispatchtoProps)(CreatePost) ;  // as connect takes two parameter first is mapStatetoProps and second is mapDispatchtoProps
                                                               //thats why the first function is passsed is null as we doesnt have any mapStatetoProps