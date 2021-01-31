import styled from 'styled-components';
import harleyDark from '../../../public/suicide-squad.jpg';
import harleyLight from '../../../public/harley-light.jpg';

const QuizBackground = styled.div`
  background-size: cover;
  background-position: center;
  background: url(${(props) => (props.theme.title === 'light' ? harleyLight : harleyDark)});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;

  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      object-fit: cover;
      background-size: cover;
      background-position: center;
      background: url(${(props) => (props.theme.title === 'light' ? harleyLight : harleyDark)});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
