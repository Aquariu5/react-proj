import '../../styles/Menu.css'

const MenuButton = (props) => {
    return(
    <button className="MenuButton">
        {props.name}
    </button>)
}

export default MenuButton