import './App.css';
import { useState } from 'react';

function App() {
  let [isMorning, setMorning] = useState(false);
  return (
    <div className = {`${isMorning ? 'dayLight':'box'}`}>
      <h1>Day time = {isMorning ? 'Morning' : 'Evening'}</h1>
      <button onClick={()=> setMorning(!isMorning)}>Change Time</button>
    </div>
  );
}

export default App;
