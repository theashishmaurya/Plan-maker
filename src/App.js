import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './Components/Parts/Main';
import Header from './Components/Parts/Header';
import Footer from './Components/Parts/Footer';




class App extends Component {
  render(){
  return (
    
    <BrowserRouter>
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </div>
    </BrowserRouter>
    
  );
}
}

export default App;
