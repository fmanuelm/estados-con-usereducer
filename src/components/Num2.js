
import { useDispatch, useStore } from "../store/StoreProvider";
import { types } from "../store/storeReducer";


const Num2 = () => {
    const dispatch = useDispatch();
    return (
        <input type="text" className="form-control" placeholder="A" name="num2" size="5" onChange={(e)=> dispatch({ type: types.NUM2, payload: {num2: e.target.value }})}/>
    );
}

export default Num2;