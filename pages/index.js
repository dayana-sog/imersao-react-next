import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import db from '../db.json';
import {
  Footer,
  GitHubCorner,
  HeadTheme,
  QuizBackground,
  QuizLogo,
  Widget
} from '../src/components';

import { Switch } from '@material-ui/core';
import { FiSun, FiMoon } from 'react-icons/Fi'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home({ ToggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <QuizBackground>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
            <HeadTheme>
              <Switch
                onChange={ToggleTheme}
                checked={title === 'light'}
                icon={
                  <FiSun
                    color="#fff"
                    size={20}
                  />
                }
                checkedIcon={
                  <FiMoon
                    color="#fff"
                    size={20}
                  />
                } 
              />
            </HeadTheme>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/dayana-sog" />
    </QuizBackground>
  );
}