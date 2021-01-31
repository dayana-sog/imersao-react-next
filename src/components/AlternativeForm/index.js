import styled, { keyframes } from 'styled-components';

const flasher = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  45% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  65% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  65% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
        animation: 1s ${flasher} ease-out;

      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
        animation: 1s ${flasher} ease-out;
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
