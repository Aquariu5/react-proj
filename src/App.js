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
import { useEffect } from 'react';
import Left from './components/Left';

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
  const [style, setStyle] = useState('');
  console.log('style', style);
  const dispatch = useDispatch();
  if (localStorage.getItem('auth')) {
    dispatch({type: "SET_AUTH", payload: true});
  }
  let displayApp;

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let st = auth ? 'Main' : 'MainAuth';
    setStyle(st);
    setLoading(false);
  }, [auth])
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
          <div className={style}>
            {auth ?
            (
              <Left/>
            )
            :
            (
              <div></div>
            )
            }
            <AppRouter style={style}/>
          </div> 

          <Footer/>
      </div>
        
    </BrowserRouter>
  )
}

export default App;
