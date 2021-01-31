/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';
import db from '../../db.json';

export default function QuizDaGaleraPage() {
  const theme = useContext(ThemeProvider);

  return (
    <ThemeProvider theme={theme}>
      <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      />
    </ThemeProvider>
  );
}
