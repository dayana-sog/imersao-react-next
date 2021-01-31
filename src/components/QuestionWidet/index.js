/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Widget from '../Widget';
import ALternativeForm from '../AlternativeForm';

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) => {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const questionId = `question__${questionIndex}`;

  const isCorrect = selectedAlternative === question.answer;

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

        <ALternativeForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);

            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1 * 2000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                key={alternative}
                className="label__wrapper"
                data-status={isQuestionSubmited && alternativeStatus}
                data-selected={isSelected}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                <label htmlFor={alternativeId}>{alternative}</label>
              </Widget.Topic>
            );
          })}

          <button type="submit" disabled={selectedAlternative === undefined}>
            Confirmar
          </button>
          {isCorrect && isQuestionSubmited && <p>Acertou!</p>}
          {!isCorrect && isQuestionSubmited && <p>Errou!</p>}
        </ALternativeForm>
      </Widget.Content>
    </Widget>
  );
};

export default QuestionWidget;
