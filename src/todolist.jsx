import React from "react";
function Todolist(){
    var [todos, setTodos]=React.useState(["hello","world"])
    return(
        <div className="hello">
            {
                todos.map((todo)=>{
                    return (
                        <li>{todo}</li>
                    )
                })
            }
        </div>
    )
}
export default Todolist;