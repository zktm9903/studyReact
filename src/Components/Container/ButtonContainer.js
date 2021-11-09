import React from 'react';
import PropTypes from 'prop-types';
import ButtonPresenter from '../Presenter/ButtonPresenter';

function ButtonContainer({ contents, calculateFunc }) {
  return (
    <ButtonPresenter onClick={calculateFunc} value={contents}>
      {contents}
    </ButtonPresenter>
  );
}

ButtonContainer.propTypes = {
  contents: PropTypes.string.isRequired,
  calculateFunc: PropTypes.func.isRequired,
};

export default ButtonContainer;
