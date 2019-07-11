import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Routes from './Routes';

import Reducers from './Reducers';
let store = createStore(Reducers);

// import logo from './logo.svg';
// import './App.css';

class App extends Component{

  render(){
    return (
      <Provider store={store}>
         <Routes/> 
      </Provider>
    )
  }
}

export default App;
