import React, { useRef, useState } from 'react';
import './Timer.css';

const Timer = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
  };

  return (
    <div className="timer">
      <h1>Time: {time}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
