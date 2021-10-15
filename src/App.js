import logo from './logo.svg';
import './App.css';

import Footer from './components/Footer';
import Menu from './components/Menu';
import Main from './components/Main';
import { useState } from 'react';




function App() {
  let [state, setState] = useState(1);
  const changeApp = (display) => {
    displayApp = display;
    console.log(`changed from App, disp = ${displayApp}`);
    setState(state = displayApp)
    console.log('state: ', state);
  } 

  let displayApp;
  return (
    <div className="FullApp">
      <Menu change={changeApp}/>
      <Main change={state}/>
      <Footer/>      
    </div>

  );
}

export default App;
