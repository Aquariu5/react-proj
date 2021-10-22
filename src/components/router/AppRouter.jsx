import { Route, Switch, Redirect } from 'react-router-dom'
import Auth from '../Auth';
import Main from '../Main';
import { useSelector } from 'react-redux';
import DataBasePage from '../info/pages/DataBasePage';
import HelpPage from '../info/pages/HelpPage';
import ContactsPage from '../info/pages/ContactsPage';
import MusicPage from '../info/pages/MusicPage';
import AboutPage from '../info/pages/AboutPage';
import Left from '../Left';
import NoticePage from '../info/pages/NoticePage';
import NewsPage from '../info/pages/news/NewsPage';
import NewPage from '../info/pages/news/NewPage';
/*<Auth/>
:
<div>
  <Menu change={changeApp}/>
  <Main change={state}/>
  <Footer/>*/

const AppRouter = (props) => {
    const auth = useSelector(state => state.authReducer.auth);
    console.log('auth', auth);
    return (
            auth ? (
                <Switch>
                <div>
                    <Route path='/main'>
                        <div className="Main">
                            <Left/>
                            <DataBasePage/>
                        </div>
                    </Route>
                    <Route path='/attention'>
                        <div className="Main">
                            <Left/>
                            <NoticePage/>
                        </div>
                    </Route>
                    <Route path='/help'>
                        <div className="Main"> 
                            <Left/>
                            <HelpPage/>
                        </div>
                    </Route>
                    <Route path='/contacts'>
                        <div className="Main">
                            <Left/>
                            <ContactsPage/>
                        </div>
                    </Route>
                    <Route path='/music'>
                        <div className="Main">
                            <Left/>
                            <MusicPage/>
                        </div>
                    </Route>
                    <Route path='/about' exact>
                        <div className="Main">
                            <Left/>
                            <AboutPage/>
                        </div>
                    </Route>
                    <Route path='/news' exact>
                        <div className="Main">
                            <Left/>
                            <NewsPage/>
                        </div>
                    </Route>
                    <Route path='/news/:id' exact>
                        <div className="Main">
                            <Left/>
                            <NewPage/>
                        </div>
                    </Route>
                    <Redirect to='/main'/>
                </div>
                </Switch>
            ) 
            :
            (
                <Switch>
                    <div>
                        <Route path='/auth'>
                        <Auth/>
                        </Route>
                        <Redirect to='/auth'/>
                    </div>
                </Switch>
            )
            );
}

export default AppRouter