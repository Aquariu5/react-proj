import logo from './logo.svg';
import './App.css';

import Footer from './components/Footer';
import Menu from './components/Menu';
import Main from './components/Main';
import { useState } from 'react';
import Auth from './components/Auth';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/router/AppRouter';


function App() {
  let [state, setState] = useState(1);
  const changeApp = (display) => {
    displayApp = display;
    console.log(`changed from App, disp = ${displayApp}`);
    setState(state = displayApp)
    console.log('state: ', state);
  } 
  //const auth = localStorage.getItem('auth');
  const auth = useSelector(state => state.authReducer.auth);
  const dispatch = useDispatch();
  if (localStorage.getItem('auth')) {
    dispatch({type: "SET_AUTH", payload: true});
  }
  let displayApp;

  //до роутов
  // компоненты Main и  Info перестали быть нужными
  // return (
  //   <div className="FullApp">
  //     {!auth ?
  //     <Auth/>
  //     :
  //     <div>
  //       <Menu change={changeApp}/>
  //       <Main change={state}/>
  //       <Footer/>
  //     </div>
  //     }
  //   </div>

  // );
  return (
    <BrowserRouter>
      <div className="FullApp">
        { auth ?
          (
            <Menu/>
          )
          :
          (
            <div></div>
          )
        }
          <AppRouter/>
          <Footer/>
      </div>
        
    </BrowserRouter>
  )
}

export default App;
