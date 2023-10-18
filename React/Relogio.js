import React, { useState, useEffect } from 'react'; //Opcional, no começo da erro mais funciona normal
import './Relogio.css';

function Relogio() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="relogio">
      <h1>Relógio</h1>
      <div className="relogio-display">
        {String(hours).padStart(2, '0')}:
        {String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </div>
    </div>
  );
}

export default Relogio;
