/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import Lottie from 'lottie-react-web';
import { ThemeContext } from 'styled-components';
import db from '../db.json';
import {
  QuizBackground,
  QuizLogo,
  Widget,
  QuizContainer,
  QuestionWidget,
} from '../src/components';

import loadLight from '../load-light.json';
import loadDark from '../load-dark.json';

function LoadingWidget() {
  const { title } = useContext(ThemeContext);

  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        {
          title === 'light' ? (
            <Lottie
              width="100%"
              options={{
                animationData: loadLight,
                loop: true,
              }}
            />
          )
            : (
              <Lottie
                width="100%"
                options={{
                  animationData: loadDark,
                  loop: true,
                }}
              />
            )
        }

      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
      </QuizContainer>
    </QuizBackground>
  );
}
