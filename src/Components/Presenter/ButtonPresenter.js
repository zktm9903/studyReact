import styled from 'styled-components';

const ButtonPresenter = styled.button`
  border: 0;
  cursor: pointer;

  &:nth-last-child(1) {
    border-radius: 0 0 0.75rem 0;
    background-color: ${e => e.theme.Colors.bgColorRed};
  }

  &:nth-child(1) {
    background-color: ${e => e.theme.Colors.mediumGrey};
  }

  &:nth-child(2) {
    background-color: ${e => e.theme.Colors.mediumGrey};
  }

  &:nth-child(3) {
    background-color: ${e => e.theme.Colors.mediumGrey};
  }

  &:nth-child(4) {
    background-color: ${e => e.theme.Colors.bgColorOrange};
  }
  &:nth-child(8) {
    background-color: ${e => e.theme.Colors.bgColorOrange};
  }
  &:nth-child(12) {
    background-color: ${e => e.theme.Colors.bgColorOrange};
  }
  &:nth-child(16) {
    background-color: ${e => e.theme.Colors.bgColorOrange};
  }

  &:nth-last-child(4) {
    border-radius: 0 0 0 0.75rem;
  }
`;

export default ButtonPresenter;
