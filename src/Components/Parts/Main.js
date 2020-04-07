import React,{Component} from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProjectDetails from '../Projects/ProjectDetails';



class Main extends Component  {
    render(){
    return(
        <BrowserRouter>
        <Switch>

        <div className="main">
        <Route exact  path='/' component={Dashboard} />

        <Route path='/project/:post_id' component = {ProjectDetails}/>
          
        </div>
        </Switch>
        </BrowserRouter>

    )
} 
}

export default Main;