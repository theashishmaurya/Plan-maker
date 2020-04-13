import React, { Component } from 'react';
import Header from './Components/Parts/Header';
import Footer from './Components/Parts/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter, Switch } from 'react-router-dom'
import ProjectDetails from './Components/Projects/ProjectDetails';
import Singin from './Components/Auth/Singin';
import SingUp from './Components/Auth/SingUp';
import CreatePost from './Components/Projects/CreateProject';
import PrivateRoute from './PublicProtectedRoutes/toPrivateRoute'
import PublicRoute from './PublicProtectedRoutes/toPublicRoute'






class App extends Component {
  render(){
  return (
    
    
    <div className="App">
    <BrowserRouter>
      <header>
        <Header/>
      </header>
      <main>
     
        <Switch>

        
        <PrivateRoute exact  path='/' component={Dashboard} />

        <PrivateRoute path = '/project/:post_id' component = {ProjectDetails}/>
        <PublicRoute path = '/Singin' component = {Singin}/>
        <PublicRoute path = '/Singup' component = {SingUp}/>
        <PrivateRoute path = '/Create' component = {CreatePost} />
          
        
        </Switch>
       
      </main>
      <footer>
        <Footer/>
      </footer>
      </BrowserRouter>
    </div>
   //
    
  );
}
}

export default App;
