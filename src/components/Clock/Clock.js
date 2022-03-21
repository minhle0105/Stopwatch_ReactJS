import { useState, useEffect, useRef } from 'react';
import './Clock.css';

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

    const playButtonImageLink = './play-button_opkxmt.svg';
    const pauseButtonImageLink = './pause-button_pinhpy.svg';
    const resetButtonImageLink = './reset-button_mdv6wf.svg';

  
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
        <div className='stopwatch' style={{marginTop: 50}}>
            <h1><span className='gold'>GOLD</span> STOPWATCH</h1>
            <div className='circle' onClick={isOn ? handleStop : handleStart}>
                <span className='time'>{minuteDisplay}:{secDisplay}:{milisecDisplay}</span>
            </div>
            <div className='control'>
                <button onClick={isOn ? handleStop : handleStart} className='buttonPlay'>
                    <img id={isOn ? 'pauseButton' : 'playButton'} src={isOn ? pauseButtonImageLink : playButtonImageLink} alt={isOn ? 'Pause' : 'Start'} />
                </button>

                <button onClick={handleReset} className='buttonReset'>
                    <img id="resetButton" src={resetButtonImageLink}  alt="Reset"/>
                </button>
            </div>
        </div>
    );
}
