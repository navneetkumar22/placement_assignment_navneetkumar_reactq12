import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>Count: &nbsp;<span>{count}</span></h2>

      <div className='update'>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
