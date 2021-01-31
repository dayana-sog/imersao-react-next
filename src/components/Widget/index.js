import styled, { css } from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  box-shadow:  7px 7px 14px #140c14,
             -7px -7px 14px #503250;
  border-radius: 20px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: -2rem;
    padding: 2rem;
  }
  
  form input {
    padding: 12px;
    border-radius: .2rem;
    margin-bottom: 2rem;
    background: transparent;
    
    ${(props) => props.theme.title === 'dark' && css`
      border: 1px solid rgba(255,255,255, 0.4);
      color: #fff;
    `}

    ${(props) => props.theme.title === 'light' && css`
      border: 1px solid #4549555e;
      color: #333;
    `}

    &::placeholder{
      color: ${(props) => (props.theme.title === 'dark' ? 'rgba(255,255,255, .6) ' : '#4549555e')} !important;
    }

    &:focus {
      border: 1px solid '#b83891';
    }

    

  }
  button {
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    padding: .6rem;
    background: #ccc;
    border: none;
    border-radius: .2rem;
    transition: all .2s;
    cursor: pointer;

    &:disabled {
      cursor: no-drop;
    }

    &:hover {
      background: ${(props) => (props.theme.title === 'dark' ? '#b83891' : '#ffafcc')} !important;
    }
  } 
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  color: ${(props) => (props.theme.title === 'dark' ? '#fff' : '#918b8b')};
  padding: 24px 32px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
 
  ul {
    list-style: none;
    padding-inline-start: 0px;
     
    li {
      text-align: center;
      margin-bottom: 8px;
      padding: .2rem;
      border-radius: 2px;
      background: ${(props) => (props.theme.title === 'dark' ? '#b83891' : '#ffafcc')} !important;
      
      &:hover {
        cursor: pointer;
      }
    }
    a {
      text-decoration: none;
      color: #F2F2F2;
    }
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;

  &:hover,
  &:focus {
    opacity: .5;
  }

  input[type="radio"]:checked+label {
    color: #180f4b;
  }

  input[type="radio"]{
    margin: 0;
    display: none;
  }
`;

export default Widget;
