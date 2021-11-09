import styled from 'styled-components';

const DisplayPresenter = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.Colors.displayColor};
  border-radius: 0.75rem 0.75rem 0 0;
`;

const CurrentCalPresenter = styled.div`
  height: 2rem;
  width: 95%;
  color: white;
  text-align: right;
  font-size: 2.5rem;
  padding-top: 1.5rem;
`;

const ResultCalPresenter = styled.div`
  height: 3rem;
  width: 95%;
  color: white;

  text-align: right;
  font-size: 3rem;
  padding-top: 1rem;
`;

export { DisplayPresenter, CurrentCalPresenter, ResultCalPresenter };
