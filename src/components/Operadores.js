
import { types } from "../store/storeReducer";
import { useDispatch } from '../store/StoreProvider';
import { Button } from 'react-bootstrap';
const Operadores = () => {
    const dispatch = useDispatch();
    return (
        <div>
        <Button onClick={()=> dispatch({type: types.SUMA })} variant="primary"> + </Button> {' '}
        <Button onClick={()=>dispatch({type: types.RESTA })} variant="primary"> - </Button> {' '}
        <Button onClick={()=>dispatch({type: types.MULTIPLICAION })} variant="primary"> x </Button> {' '}
        <Button onClick={()=>dispatch({type: types.DIVISION })} variant="primary"> / </Button>
        
        </div>
    );
};

export default Operadores;