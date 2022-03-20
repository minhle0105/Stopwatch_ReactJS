import { useState, useEffect, useRef } from 'react';

export const Clock = () => {
    const [sec, setSec] = useState(0);
    const [milisec, setMilisec] = useState(0);
    const [secDisplay, setSecDisplay] = useState("0" + sec)
    const [milisecDisplay, setMiliSecDisplay] = useState("0" + milisec)
    const [isOn, setIsOn] = useState(false);
  
    let intervalId = useRef(1);
    let intervalId2 = useRef(2);
  
    useEffect(() => {
      setSecDisplay(sec < 10 ? "0" + sec : sec);
      setMiliSecDisplay(milisec < 10 ? '0' + milisec : milisec);
    }, [sec, milisec])
  
    const handleStart = () => {
      intervalId.current = setInterval(() => {
        setSec(prevState => prevState + 1);
      }, 1000)
      intervalId2.current = setInterval(() => {
        setMilisec(prevState => prevState === 99 ? 0 : (prevState + 1));
      }, 0.1);
      setIsOn(true);
    }
  
    const handleStop = () => {
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
        <div>
          <h1>{secDisplay} : {milisecDisplay}</h1>
          <button onClick={isOn ? handleStop : handleStart}>{isOn ? 'Stop' : 'Start'}</button>
          <button onClick={handleReset}>Reset</button>
        </div>
    );
}