import React, { Component } from 'react';
import {Greet,Greet1} from './comp/Greet'
import Welcome from './comp/Welcome'
import Hello from './comp/Hello'
import HelloWithoutJSX from './comp/HelloWithoutJSX'
import Message from './comp/Message'
import Counter from './comp/Counter'
import FunctionClick from './comp/FunctionClick'


import './App.css';
import ClickHandlerBind from './comp/ClickHandlerBind';
import ParentComp from './comp/ParentComp';
import ClassCounter from './comp/ClassCounter';
import HookCounter from './comp/HookCounter';
import UserGreeting from './comp/UserGreeting';
import Namelist from './comp/Namelist';
import StyleSheet from './comp/StyleSheet';
import InlineStyle from './comp/InlineStyle';
import Form from './comp/Form';
import LifeCycleA from './comp/LifeCycleA';
import Fragments from './comp/Fragments';
import Tables from './comp/Tables';

class App extends Component {
 
  
  render() {
    return (
     <h1 className='App'>
       <Tables/> 
     </h1>
     
    )
  }
}

export default App;
