import logo from './logo.svg' ;
import './App.css';
import Counter from './prop';
function App() {
   return(
    <div className='App'>
      <Counter s={100} i={10}></Counter>
      <Counter s={200} i={5}></Counter>
      </div>
   )
}

export default App;