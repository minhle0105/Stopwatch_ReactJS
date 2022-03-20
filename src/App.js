import { useState, useEffect, useRef } from 'react';



function App() {
  const [time, setTime] = useState(180);
  const [isOn, setIsOn] = useState(false);

  let intervalId = useRef(1);

  const handleStart = () => {
    intervalId.current = setInterval(() => {
      setTime(prevState => prevState - 1);
    }, 1000)
    setIsOn(true);
    console.log("Start -> " + intervalId.current)
  }

  const handleStop = () => {
    console.log("Clear -> " + intervalId.current)
    setIsOn(false);
    clearInterval(intervalId.current);
  }

  const handleReset = () => {
    clearInterval(intervalId.current);
    setTime(180);
    setIsOn(false);
  }

  return (
    <div className="App">
      <div>
        <h1>{time}</h1>
        <button onClick={isOn ? handleStop : handleStart}>{isOn ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
