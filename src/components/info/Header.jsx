import cl from '../../styles/Info.module.css'
import { useSelector, useDispatch } from 'react-redux'
const Header = (props) => {
    const display = useSelector((state) => state.displayReducer.display);
    let style = display ? cl.Header : cl.HeaderFull;
    return <div className={style}>
        {props.name}
    </div>
}

export default Header