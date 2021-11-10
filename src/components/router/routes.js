import Auth from "../Auth"
import AboutPage from "../info/pages/AboutPage"
import ContactsPage from "../info/pages/ContactsPage"
import Countries from "../info/pages/Countries"
import DataBasePage from "../info/pages/DataBasePage"
import HelpPage from "../info/pages/HelpPage"
import MusicPage from "../info/pages/MusicPage"
import NewsPage from "../info/pages/news/NewsPage"
import NoticePage from "../info/pages/NoticePage"
import NewPage from "../info/pages/news/NewPage"
export const Routes = {
    auth: '/auth',
    main: '/main',
    help: '/help',
    contacts: '/contacts',
    attention: '/attention',
    music: '/music',
    about: '/about',
    news: '/news',
    new: '/news/:id',
    countries: '/countries'
}
export const publicRoutes = [
    {path: Routes.main, exact: true, component: DataBasePage},
    {path: Routes.attention, exact: true, component: NoticePage},
    {path: Routes.help, exact: true, component: HelpPage},
    {path: Routes.contacts, exact: true, component: ContactsPage},
    {path: Routes.music, exact: true, component: MusicPage},
    {path: Routes.about, exact: true, component: AboutPage},
    {path: Routes.news, exact: true, component: NewsPage},
    {path: Routes.new, exact: true, component: NewPage},
    {path: Routes.countries, exact: true, component: Countries},
]

export const privateRoutes = [
    {path: Routes.auth, exact: true, component: Auth},
]

/* <Switch>
<div className={props.style}>
    <Route path='/main'>
            <DataBasePage/>
    </Route>
    <Route path='/attention'>
            <NoticePage/>
    </Route>
    <Route path='/help'>
            <HelpPage/>
    </Route>
    <Route path='/contacts'>
            <ContactsPage/>
    </Route>
    <Route path='/music'>
            <MusicPage/>
    </Route>
    <Route path='/about' exact>
            <AboutPage/>
    </Route>
    <Route path='/news' exact>
            <NewsPage/>
    </Route>
    <Route path='/news/:id' exact>
            <NewPage/>
    </Route>
    <Route path='/countries' exact>
            <Countries/>
    </Route>
    <Redirect to='/main'/>
</div>
</Switch>
) 
:
(
<Switch>
<div className={props.style}>
    <Route path='/auth'>
    <Auth/>
    </Route>
    <Redirect to='/auth'/>
</div>
</Switch> */