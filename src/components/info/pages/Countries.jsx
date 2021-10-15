import { useSelector} from 'react-redux';
import Header from '../Header';
import cl from '../../../styles/Info.module.css';
import { countries } from '../../dataBase/countries';
const Countries = (props) => {

    //let arr = countries;
    // let jsx = '';
    // for (let el of arr)
    // {
    //     let fields = el.to;
    //     jsx += <p>{el.name}</p>
    //     for (let fi of fields)
    //         jsx += <li>{fi}</li>
    // }
    let arr = countries.map(el =><p>{el.name}<li>{el.to}</li></p>)
    //console.log(jsx)
    return (
        <div style={{background: 'seagreen'}}>
            <Header name="Страны лидеры по производству БПЛА"/>
            {arr}
        </div>
    );
}

export default Countries
