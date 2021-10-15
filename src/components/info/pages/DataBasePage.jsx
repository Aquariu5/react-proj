
import { useSelector} from 'react-redux'
import DB from '../../dataBase/DataBase';
import Header from '../Header';
import Keys from '../../dataBase/Keys';
import MenuButton from '../../ui-components/MenuButton';
import { countries } from '../../dataBase/countries';
import cl from '../../../styles/Info.module.css'
import { useDispatch } from 'react-redux';

const DataBasePage = (props) => {
    let dispath = useDispatch()
    const setPage = () => {
        dispath({type: "SET_PAGE", payload: 'Страны'})
    }
    return (
    <div>
        <Header name="База данных беспилотных летательных аппаратов"/>
        <DB start="0" end="6"/>
        <div className={cl.UnderBase}>
            <Keys/>
            <MenuButton onClick={setPage} name="Страны"/>
        </div>
        
    </div>
    );
}

export default DataBasePage