import React,{Component} from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProjectDetails from '../Projects/ProjectDetails';
import Singin from '../Auth/Singin';
import SingUp from '../Auth/SingUp';



class Main extends Component  {
    render(){
    return(
        <BrowserRouter>
        <Switch>

        
        <Route exact  path='/' component={Dashboard} />

        <Route path = '/project/:post_id' component = {ProjectDetails}/>
        <Route path = '/Singin' component = {Singin}/>
        <Route path = '/Singup' component = {SingUp}/>
          
        
        </Switch>
        </BrowserRouter>

    )
} 
}

export default Main;