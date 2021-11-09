import React, { useState } from 'react';
import Calculator from './Components/Presenter/CalculatorPresenter';
import {
  Display,
  CurrentCal,
  ResultCal,
} from './Components/Presenter/DisplayPresenter';
import Control from './Components/Presenter/ControlPresenter';

function App() {
  const [numString, setNumber] = useState('jjkk');
  return (
    <>
      <Calculator>
        <Display>
          <CurrentCal>{numString}</CurrentCal>
          <ResultCal></ResultCal>
        </Display>
        <Control k={setNumber} />
      </Calculator>
    </>
  );
}

export default App;
