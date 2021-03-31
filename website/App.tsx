import React, { useState } from 'react';
import './App.css';
import { XRadioGroup, XRadio } from '../'

const App: React.FC = () => {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      <XRadioGroup
        name="sexs"
        value={value}
        onChange={value => setValue(value)}
        className="center"
      >
        <XRadio value="man">男</XRadio>
        <XRadio value="girl">女</XRadio>
        <XRadio value="unknown" disabled >人妖</XRadio>
      </XRadioGroup>
    </div>
  );
};

export default App;
