import { useState, useRef } from 'react';

function App() {
  const [sec, setSec] = useState(0);
  const [milisec, setMilisec] = useState(0);
  const [isOn, setIsOn] = useState(false);

  let intervalId = useRef(1);
  let intervalId2 = useRef(2);

  const handleStart = () => {
    intervalId.current = setInterval(() => {
      setSec(prevState => prevState + 1);
    }, 1000)
    intervalId2.current = setInterval(() => {
      setMilisec(prevState => prevState === 1000 ? 0 : prevState + 1);
    }, 1);
    setIsOn(true);
    console.log("Start -> " + intervalId.current)
    console.log("Start milisec -> " + intervalId2.current)
  }

  const handleStop = () => {
    console.log("Clear -> " + intervalId.current)
    console.log("Clear milisec -> " + intervalId2.current)
    setIsOn(false);
    clearInterval(intervalId.current);
    clearInterval(intervalId2.current);
  }

  const handleReset = () => {
    clearInterval(intervalId.current);
    clearInterval(intervalId2.current);
    setSec(0);
    setMilisec(0);
    setIsOn(false);
  }

  return (
    <div className="App">
      <div>
        <h1>{sec < 10 ? "0" + sec : sec} : {milisec < 10 ? '0' + (milisec + "").substring(0,2) : (milisec + "").substring(0,2)}</h1>
        <button onClick={isOn ? handleStop : handleStart}>{isOn ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
