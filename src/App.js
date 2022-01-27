import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    state = {...state, count2:state.count2 + 2}
    state = {...state, count3:state.count3 + 5}

    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: action.payload}
        default:
            throw new Error('Error')
    }

}

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div>
            <div className="Count">{state.count1}</div>
            <div className="Count">{state.count2}</div>
            <div className="Count">{state.count3}</div>
            <button className="Button" onClick={() => dispatch({type: 'inc'})}>INC</button>
            <button className="Button" onClick={() => dispatch({type: 'dec'})}>DEC</button>
            <button className="Button" onClick={() => dispatch({type: 'reset', payload: 2})}>RESET</button>
        </div>
    )
}

export default App;