import React, { Component } from 'react';
import Header from './Components/Parts/Header';
import Footer from './Components/Parts/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProjectDetails from './Components/Projects/ProjectDetails';
import Singin from './Components/Auth/Singin';
import SingUp from './Components/Auth/SingUp';
import CreatePost from './Components/Projects/CreateProject';






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

        
        <Route exact  path='/' component={Dashboard} />

        <Route path = '/project/:post_id' component = {ProjectDetails}/>
        <Route path = '/Singin' component = {Singin}/>
        <Route path = '/Singup' component = {SingUp}/>
        <Route path = '/Create' component = {CreatePost} />
          
        
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
