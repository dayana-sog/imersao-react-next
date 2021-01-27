/* eslint-disable react/prop-types */
import React from 'react';
import Widget from '../Widget';

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) => {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                key={alternative}
                className="label__wrapper"
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                <label htmlFor={alternativeId}>{alternative}</label>
              </Widget.Topic>
            );
          })}

          <button type="submit">
            Confirmar
          </button>
        </form>
      </Widget.Content>
    </Widget>
  );
};

export default QuestionWidget;
