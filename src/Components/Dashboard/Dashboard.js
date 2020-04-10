import React, { Component } from 'react';
import ProjectList from '../Projects/ProjectList';
import Notification from './Notification';
import {connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux' ;


class Dashboard extends Component{
    render(){
        const {DashProjects} = this.props  // destructuring of the Projects here. We have pass down all the property of our state to the props.
        //Read more about destructuring at : https://www.freecodecamp.org/news/the-basics-of-destructuring-props-in-react-a196696f5477/
        return(
            <div className="container dashboard">
                <div className="row">
                    <div className="col s12 m6">
                    <ProjectList Projects = {DashProjects}/> {/* here Project is passed as a property now we can access it in ProjectList and also the ProjectReducers state :D */}

                    </div>
                 
                    <div className=" col s12 m4 offset-m2">
                    <Notification/>

                    </div>
                </div>
            </div>

        )
    }
}

const mapStatetoProps=(state)=>{
    // We are changing state named posts which is kept in ProjectReducers in then it is passed to RootReducer with object name 
    //project then for accesing it we have to go through RootReduce 
    // connect => RootReducer => project => ProjectReducer => posts
    // thats how we can access it
    //console.log(state);
    return{
    DashProjects : state.firestore.ordered.projects    // Here we are making a property(props) named Projects which we will be passing Project summary
    
    }
}
export default compose(
    connect(mapStatetoProps),
    firestoreConnect ([
        {collection : 'projects'}
    ]))
    (Dashboard);