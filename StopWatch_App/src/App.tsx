import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [seconds, setTotalSeconds ] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const hours = Math.max(0, Math.floor(seconds / 3600));
  const minutes = Math.max(0,Math.floor((seconds % 3600) / 60));
  const secondsDisplay = Math.max(0, seconds % 60);
  const [clickedLap, setClickedLap] = useState<number | null>(null);
  //const [clickLapMinute, setClickedLapMinute] = useState<number | null>(null);
  //const [clickLapHour, setClickedLapHour] = useState<number | null>(null);
  
  //const timer = useRef([hours,minutes,secondsDisplay]);
  //const lap = [hours,minutes,seconds];
  //const [save, SetLap] = useState(localStorage.getItem('secondsDisplay'));
  //const [laps,setLap] = useState(String(sessionStorage.getItem("laps")||0));
  //const [laps, setLaps] = useState('');
  useEffect(() => {
    let interval;
    if (isRunning==true) {
      interval = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval!);
    },[isRunning]
  );
  //const logLap = [];
  const handleLapTimes = () =>{
    setClickedLap(secondsDisplay);
  }
  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
    setTotalSeconds(0);
    hours != 0;
    minutes != 0;
    setCount(0);  
  };
  const handlePause = () => {
    setIsRunning(false);
    //setIsPaused(true);
  }
  const handleResume = () => {
    handleStart();
  };
  const handleReset = () => {
    setIsRunning(false);
    setTotalSeconds(0);
    //setMinutes(0);
    //setHours(0);
    setCount(0);
  } 
  const handleLap = () => {
    setCount((count) => count + 1);    
  }

  return (
    <>
      <section id="center">
        <div className="border border-primary">
        <div className="Container" >
        
    <header>
          <h3 className='counter'>Timer Application</h3>
    </header>
        <div className='counter'>
          <colgroup>
          <button type="button" className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary' onClick={()=>{handleLapTimes();}}>Lap Number {count}</button>
            <button type="button" className='counter' onClick={handleStart}>Start</button>
            <button type="button" className='counter' onClick={handleResume}>Resume</button>
            <button type="button" className='counter' onClick={handlePause}>Pause</button>
            <button type="button" className='counter' onClick={handleReset}>Reset</button>
            <button type="button" className='counter' onClick={handleStop}>Stop</button>
          
          <div>
            <div className='circle'></div>
          </div>
          <div className='circle-inner'>
          <span>Timer is<br/> {hours}:{minutes}:{secondsDisplay}<br></br></span>
          </div>
          
          <ul>
            {clickedLap !== null && clickedLap !==undefined &&(
            <li>
                <p>The Last Lap:{String(clickedLap)} Seconds</p>
                <p></p>
            </li>
            )}
          </ul>

          
          </colgroup>
        </div>
        </div>
        </div>
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
);}
export default App

