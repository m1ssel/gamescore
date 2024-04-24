import React from 'react';
import { useState } from 'react';

function SortButtons() {
  const [button1Color, setButton1Color] = useState('');
  const [button2Color, setButton2Color] = useState('');
  const [text1Color, setText1Color] = useState('#464646');
  const [text2Color, setText2Color] = useState('#464646');

  const handleButton1Click = () => {
    setButton1Color('#0000000a');
    setButton2Color('');

    setText1Color('#dc4242');
    setText2Color('#464646'); // default
  };

  const handleButton2Click = () => {
    setButton1Color('');
    setButton2Color('#0000000a');

    setText1Color('#464646'); // default
    setText2Color('#dc4242');
  };

  const Button = ({ btnClass, btnCol, textCol, btnFn, btnText }) => {
    return (
      <button
        className={`sort-item ${btnClass}`}
        style={{ backgroundColor: btnCol, color: textCol }}
        onClick={btnFn}
      >
        {btnText}
      </button>
    );
  };
  return (
    <>
      <Button
        btnClass="sort-first"
        btnCol={button1Color}
        textCol={text1Color}
        btnFn={handleButton1Click}
        btnText="Last Added"
      />
      <Button
        btnClass="sort-second"
        btnCol={button2Color}
        textCol={text2Color}
        btnFn={handleButton2Click}
        btnText="Name"
      />
    </>
  );
}

export default SortButtons;
