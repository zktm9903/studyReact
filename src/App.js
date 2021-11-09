/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */

import React, { useState } from 'react';
import CalculatorPresenter from './Components/Presenter/CalculatorPresenter';
import DisplayContainer from './Components/Container/DisplayContainer';
import ControlContainer from './Components/Container/ControlContainer';

function App() {
  const [currentCal, setcurrentCal] = useState(['1', '+', '9']);
  const [resultCal, setresultCal] = useState(10);

  const tmpChange = e => {
    const value = e.target.value;

    switch (value) {
      case 'c':
        setresultCal(value);
        break;

      case '=':
        setresultCal(value);
        break;

      case '+':
        setresultCal(value);
        break;

      default:
        setresultCal(value);
        break;
    }
  };
  return (
    <>
      <CalculatorPresenter>
        <DisplayContainer CurrentCal={currentCal} ResultCal={resultCal} />
        <ControlContainer calculateFunc={tmpChange} />
      </CalculatorPresenter>
    </>
  );
}

export default App;
