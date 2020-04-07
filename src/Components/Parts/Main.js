import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom'



const Main = () => {
    return(
        <BrowserRouter>
        <Switch>

        <div className="main">
        <Route path='/'component={Dashboard} />
          
        </div>
        </Switch>
        </BrowserRouter>

    )
}

export default Main;