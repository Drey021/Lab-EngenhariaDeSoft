import React, { useState, useEffect } from 'react'; //Opcional, no começo da erro mais funciona normal
import './Letreiro.css';

function Letreiro() {
  const [text, setText] = useState('');
  const originalText = 'Conheça a Fatec';

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setText(originalText.substring(0, currentIndex));
      currentIndex = (currentIndex + 1) % (originalText.length + 1);
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="letreiro">
      <h1>Letreiro</h1>
      <div className="letreiro-text">{text}</div>
    </div>
  );
}

export default Letreiro;
