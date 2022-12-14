import './App.css';
import { useState } from 'react';
import Counter from './counter';

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(false);
  return (
    <div className = {`${isMorning ? 'dayLight':'box'}`}>
      <h1>Day time = {isMorning ? 'Morning' : 'Night'}</h1>
      <Counter counter = {count}/>
      <button onClick={()=>setCount(count+1)}>Update Counter!</button>
      <button onClick={()=> setMorning(!isMorning)}>Change Time</button>
    </div>
  );
}

export default App;
