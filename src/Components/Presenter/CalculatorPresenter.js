import styled from 'styled-components';

const CalculatorPresenter = styled.div`
  width: 20em;
  height: 30em;
  border-radius: 0.75rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-color: white;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0px 20px 120px -20px rgba(0, 0, 0, 0.7);
`;

export default CalculatorPresenter;
