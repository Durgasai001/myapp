import React from "react";
function Todolist (){
    var [D,setD]=React.useState(["hello world", "my love"])
    return (<div>{
        D.map((s)=>{
            return (<li>{s}</li>)
        })
        }</div>)
}
export default Todolist;