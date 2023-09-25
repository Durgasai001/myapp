
import './App.css';
import Counter from './counter';
import Todolist from './todolist';
function App() {
    return (
        <div className='mybox'>
           <Todolist></Todolist>
            <Counter x={100} y={2}></Counter>
            <Counter x={50} y={5}></Counter> 
        </div>
        
    );
}

export default App;