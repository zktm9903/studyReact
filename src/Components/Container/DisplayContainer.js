import React from 'react';
import PropTypes from 'prop-types';
import {
  DisplayPresenter,
  CurrentCalPresenter,
  ResultCalPresenter,
} from '../Presenter/DisplayPresenter';

function DisplayContainer({ CurrentCal, ResultCal }) {
  return (
    <DisplayPresenter>
      <CurrentCalPresenter>{CurrentCal}</CurrentCalPresenter>
      <ResultCalPresenter>{ResultCal}</ResultCalPresenter>
    </DisplayPresenter>
  );
}
DisplayContainer.propTypes = {
  CurrentCal: PropTypes.array,
  ResultCal: PropTypes.number.isRequired,
};

export default DisplayContainer;
