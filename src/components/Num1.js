
import { useDispatch, useStore } from "../store/StoreProvider";
import { types } from "../store/storeReducer";



const Num1 = () => {
    const dispatch = useDispatch();
    return (
        <input type="text" className="form-control" placeholder="A" name="num1" size="5" onChange={(e)=> dispatch({ type: types.NUM1, payload: {num1: e.target.value }})}/>
    );
}

export default Num1;