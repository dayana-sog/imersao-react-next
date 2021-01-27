import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Head from 'next/head';
import { Switch } from '@material-ui/core';
import { FiSun, FiMoon } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { useRouter } from 'next/router';

import db from '../db.json';
import {
  Footer,
  GitHubCorner,
  HeadTheme,
  QuizBackground,
  QuizLogo,
  Widget,
} from '../src/components';

import imageFavIcon from '../assets/trophy.png';

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

// eslint-disable-next-line react/prop-types
export default function Home({ ToggleTheme }) {
  const { title } = useContext(ThemeContext);
  const [user, setUser] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.info(`Prepare a cachola ${user} para responder algumas perguntas...`, {
      className: 'toast-init',
    });

    router.push(`/quiz?name=${user}`);
  };

  return (
    <QuizBackground>
      <Head>
        <title>Imersão ReactJS - NextJS</title>
        <link
          rel="icon"
          type="image/png"
          href={imageFavIcon}
        />
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
            <HeadTheme>
              <Switch
                onChange={ToggleTheme}
                checked={title === 'light'}
                icon={(
                  <FiSun
                    color="#fff"
                    size={20}
                  />
                )}
                checkedIcon={(
                  <FiMoon
                    color="#fff"
                    size={20}
                  />
                )}
              />
            </HeadTheme>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Seu nome"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                name="user"
                required
              />
              <button type="submit" disabled={!user}>
                Jogar
                {' '}
                {user}
              </button>

            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <ul>
              <li><a href="https://quiz-imersao-react.vercel.app">Data Science Quiz</a></li>
              <li><a href="https://imersao-react-alura.malufell.vercel.app">How I Met Your Mother!</a></li>
              <li><a href="https://quiz-padrao-projetos.thassya.vercel.app">Padrão de Projetos</a></li>
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/dayana-sog" />
    </QuizBackground>
  );
}
