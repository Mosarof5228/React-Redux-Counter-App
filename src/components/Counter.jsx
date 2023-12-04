import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "../services/actions/Action";



const Counter = () => {
    const count = useSelector(store => store.count)
    const dispatch = useDispatch();


    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    return (
        <div>
            <h2>Counter App</h2>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Counter;