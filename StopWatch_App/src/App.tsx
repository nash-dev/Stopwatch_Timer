import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  const [time, setTime ] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hour, setHours] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  useEffect(() => {
  
    let interval,interval2,interval3;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
        if(prevTime === 59){
         // Math.floor(minutes/2);
          return 0
          }
          return prevTime+1;
        });
      }, 1000);
      {
      interval2 = setInterval(() => {
        setMinutes((prevMin) => {
          if(prevMin==59)
          {
            return 0;
          }
          return prevMin+1;
      });
      }, 60000);}
      
      interval3 = setInterval(() => {
        setHours((prevHour) => {
          if(prevHour ===12)
            return 0;
          return prevHour+1;
      });
      }, 3600000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval!&&interval2!&&interval3!);
    }
    return () => clearInterval(interval!&&interval2!&&interval3!);
    },[isRunning]
  )/*
  useEffect(() =>{
    let interval2;
    if(isRunning){
      interval2 = setInterval(() => {
        setMinutes((prevMin) => {
          if(prevMin==59)
          {
            return 0;
          }
          return prevMin+1;
      });
      }, 60000);
      return () => clearInterval(interval2!);
    }
  },[isRunning])
*/
  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
    setMinutes(0);
    setHours(0);
  };
  const handlePause = () => {
    setIsRunning(false);
  }
  const handleResume = () => {
    handleStart();
  };

  return (
    <>
      <section id="center">
        <div className="hero">
          
        </div>
        <div>
          <h1>Timer Application</h1>
        </div>
        <button type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}>
          Lap Number {count}
        </button>
        
        <button type="button" className='counter' onClick={handleStart}>Start</button>
        <label className='counter'>Timer is {hour}:{minutes}:{time}</label>
        <button type="button" className='counter' onClick={handleStop}>Stop</button>  
        <button type="button" className='counter' onClick={handleResume}>Resume</button>
        <button type="button" className='counter' onClick={handlePause}>Pause</button>
      </section>
      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>


);}
export default App