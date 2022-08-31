import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random title');
  const handleCLick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleCLick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
