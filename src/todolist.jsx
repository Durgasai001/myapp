import React from "react";
function Todolist(){
    var [todos, setTodos]=React.useState([])
    function abc(){
        var v=document.getElementById("ss").value 
         setTodos([...todos,v])
    }
    return(
        <div>
            <input type="text" id="ss"></input>
            {
                todos.map((todo)=>{
                    return (
                        <li>
                            {todo}
                            <button onClick={abc}>Add todo</button>
                        </li>
                    )
                })
            }
        </div>
    )
}
export default Todolist;