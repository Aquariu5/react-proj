import { Route, Switch, Redirect } from 'react-router-dom'
import Auth from '../Auth';
import Main from '../Main';
import { useSelector } from 'react-redux';
import DataBasePage from '../info/pages/DataBasePage';
import HelpPage from '../info/pages/HelpPage';
import ContactsPage from '../info/pages/ContactsPage';
import MusicPage from '../info/pages/MusicPage';
import AboutPage from '../info/pages/AboutPage';
import NoticePage from '../info/pages/NoticePage';
import NewsPage from '../info/pages/news/NewsPage';
import NewPage from '../info/pages/news/NewPage';
import Countries from '../info/pages/Countries';
import {publicRoutes, privateRoutes} from './routes'
/*<Auth/>
:
<div>
  <Menu change={changeApp}/>
  <Main change={state}/>
  <Footer/>*/

const AppRouter = (props) => {
    const auth = useSelector(state => state.authReducer.auth);
    console.log('stylefromparent', props.style);
    

    // return (
    //         auth ?
    //             <Switch>
    //                 <div className={props.style}>
    //                     <Route path='/main'>
    //                             <DataBasePage/>
    //                     </Route>
    //                     <Route path='/attention'>
    //                             <NoticePage/>
    //                     </Route>
    //                     <Route path='/help'>
    //                             <HelpPage/>
    //                     </Route>
    //                     <Route path='/contacts'>
    //                             <ContactsPage/>
    //                     </Route>
    //                     <Route path='/music'>
    //                             <MusicPage/>
    //                     </Route>
    //                     <Route path='/about' exact>
    //                             <AboutPage/>
    //                     </Route>
    //                     <Route path='/news' exact>
    //                             <NewsPage/>
    //                     </Route>
    //                     <Route path='/news/:id' exact>
    //                             <NewPage/>
    //                     </Route>
    //                     <Route path='/countries' exact>
    //                             <Countries/>
    //                     </Route>
    //                     <Redirect to='/main'/>
    //                 </div>
    //             </Switch>
    //         :
    //             <Switch>
    //                 <div className={props.style}>
    //                     <Route path='/auth'>
    //                     <Auth/>
    //                     </Route>
    //                     <Redirect to='/auth'/>
    //                 </div>
    //             </Switch>
    //         );
// }

    return (
        auth ?
            <Switch>
                <div className={props.style}>
                    {
                    publicRoutes.map(route =>
                        <Route 
                            component={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />
                    )
                    }
                    <Redirect to='/main'/>
                </div>

            </Switch>
            :
            <Switch>
                <div className={props.style}>
                    {
                    privateRoutes.map(route =>
                        <Route 
                            component={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />
                    )
                    }
                    <Redirect to='/auth'/>
                </div>
            </Switch>
    );
}
export default AppRouter