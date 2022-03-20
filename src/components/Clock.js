import { useState, useEffect, useRef } from 'react';

export const Clock = () => {

    const [minute, setMinute] = useState(0);
    const [minuteDisplay, setMinuteDisplay] = useState("0" + minute);

    const [sec, setSec] = useState(0);
    const [secDisplay, setSecDisplay] = useState("0" + sec)

    const [milisec, setMilisec] = useState(0);
    const [milisecDisplay, setMiliSecDisplay] = useState("0" + milisec)

    const [isOn, setIsOn] = useState(false);
  
    let minuteIntervalId = useRef(0);
    let secIntervalId = useRef(1);
    let milisecIntervalId2 = useRef(2);
  
    useEffect(() => {
        setMinuteDisplay(minute < 10 ? "0" + minute : minute);
        setSecDisplay(sec < 10 ? "0" + sec : sec);
        setMiliSecDisplay(milisec < 10 ? '0' + milisec : milisec);
    }, [minute, sec, milisec])
  
    const handleStart = () => {
        minuteIntervalId.current = setInterval(() => {
            setMinute(prevState => prevState + 1);
        }, 60000)

        secIntervalId.current = setInterval(() => {
        setSec(prevState => prevState === 59 ? 0 : (prevState + 1));
        }, 1000);

        milisecIntervalId2.current = setInterval(() => {
            setMilisec(prevState => prevState === 99 ? 0 : (prevState + 1));
        }, 0.1);
        setIsOn(true);
    }
  
    const handleStop = () => {
        setIsOn(false);
        clearInterval(minuteIntervalId.current);
        clearInterval(secIntervalId.current);
        clearInterval(milisecIntervalId2.current);
    }
  
    const handleReset = () => {
        clearInterval(minuteIntervalId.current);
        clearInterval(secIntervalId.current);
        clearInterval(milisecIntervalId2.current);
        setMinute(0);
        setSec(0);
        setMilisec(0);
        setIsOn(false);
    }
  
    return (
        <div>
          <h1>{minuteDisplay} : {secDisplay} : {milisecDisplay}</h1>
          <button onClick={isOn ? handleStop : handleStart}>{isOn ? 'Stop' : 'Start'}</button>
          <button onClick={handleReset}>Reset</button>
        </div>
    );
}