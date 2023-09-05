import React from "react"; 
import './index.css';
function Counter(props){
    var [count,setCount]=React.useState(props.s)
    function inc(){
        setCount(count+props.i)
    }
    function dec(){
        setCount(count-props.i)
    }
    return (<div className="mybox">
        <h1>Counter:{count}</h1>
        <button onClick={inc}>increment</button>
        <button onClick={dec}>decrement</button>
        </div>)
}
export default Counter;