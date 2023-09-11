import React from "react";
function Counter(props){
    var[c,setC]=React.useState(props.s)
    function inc(i){
        setC(c+props.i)
    }
    function dec(i){
        setC(c-props.i)
    }
    return (<div>
         <h1>Counter:{c}</h1>
        <button onClick={inc}>increment</button>
        <button onClick={dec}>decrement</button>
    </div>
       
    )
}
export default Counter;