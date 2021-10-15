import { useState } from 'react'
import '../styles/Menu.css'
import MenuButton from './ui-components/MenuButton'
import LeftButton from './ui-components/LeftButton'
import {useDispatch } from 'react-redux';
import {menu} from './models/menu.js'
const Menu = (props) => {

    const [state, setState] = useState(1);
    let arr = menu;
    let displayMenu = '';
    const dispath = useDispatch();
    const ChangePage = (name) => {
        dispath({type: "SET_PAGE", payload: name});
    }
    arr = arr.map(el => <MenuButton onClick={() => ChangePage(el)}  name={el}/>);

    return <div className="Menu">
                <LeftButton  name={'Cкрыть меню'}/>
                {arr}
            </div>
}

export default Menu
