import React from 'react';
function Todolist(props){
    var [todo,setTodo]=React.useState([...props.ar])
    return(
        <div className='box'>
            <h1>{props.title}</h1>
            <h4>Captain:{props.head}</h4>
            <img src={props.im.src}/>
            <h4><u>team</u></h4>
            <ul>
                {
                    todo.map((to)=>{
                        return <li>{to}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;