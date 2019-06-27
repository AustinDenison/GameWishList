import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Search from './Components/Search'
import FrontPage from './Components/FrontPage';


class App extends Component{
  constructor(){
    super()
    this.state = {
      
    }
  }

  
  render(){
    return (
      <div className='header'></div>,
      <div className="App">
        <Search />
        <FrontPage />
      </div>
    );
  }
}

export default App;
