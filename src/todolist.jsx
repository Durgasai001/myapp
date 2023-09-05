import React from "react";
import './index.css';
function Todolist(){
    var [todos, setTodos]=React.useState(["hello","world"])
    function Abc(){
        var nt=document.getElementById('df').value
        setTodos([...todos.temp])

    }
    return(
        <div className="mybox">
            {
                todos.map((todo)=>{
                    return (
                        <li>{todo}
                        <input type="text" id="df">
                        <button onClick={Abc}>delete</button>
                        </li>
                    )
                })
            }
        </div>
    )
}
export default Todolist;