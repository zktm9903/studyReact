import React from 'react';
import PropTypes from 'prop-types';
import ControlPresenter from '../Presenter/ControlPresenter';
import ButtonContainer from './ButtonContainer';

function ControlContainer({ calculateFunc }) {
  return (
    <ControlPresenter>
      <ButtonContainer contents="C" calculateFunc={calculateFunc} />
      <ButtonContainer contents="+/-" calculateFunc={calculateFunc} />
      <ButtonContainer contents="%" calculateFunc={calculateFunc} />
      <ButtonContainer contents="/" calculateFunc={calculateFunc} />
      <ButtonContainer contents="7" calculateFunc={calculateFunc} />
      <ButtonContainer contents="8" calculateFunc={calculateFunc} />
      <ButtonContainer contents="9" calculateFunc={calculateFunc} />
      <ButtonContainer contents="X" calculateFunc={calculateFunc} />
      <ButtonContainer contents="4" calculateFunc={calculateFunc} />
      <ButtonContainer contents="5" calculateFunc={calculateFunc} />
      <ButtonContainer contents="6" calculateFunc={calculateFunc} />
      <ButtonContainer contents="-" calculateFunc={calculateFunc} />
      <ButtonContainer contents="3" calculateFunc={calculateFunc} />
      <ButtonContainer contents="2" calculateFunc={calculateFunc} />
      <ButtonContainer contents="1" calculateFunc={calculateFunc} />
      <ButtonContainer contents="+" calculateFunc={calculateFunc} />
      <ButtonContainer contents="0" calculateFunc={calculateFunc} />
      <ButtonContainer contents="." calculateFunc={calculateFunc} />
      <ButtonContainer contents="&#8592;" calculateFunc={calculateFunc} />
      <ButtonContainer contents="=" calculateFunc={calculateFunc} />
    </ControlPresenter>
  );
}

ControlContainer.propTypes = {
  calculateFunc: PropTypes.func.isRequired,
};

export default ControlContainer;
