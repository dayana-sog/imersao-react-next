/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React from 'react';
import Widget from '../Widget';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {results.filter((x) => x).length}
          {' '}
          perguntas
        </p>

        <ul>
          {results.map((result, index) => (
            <li key={index + 1}>
              Pergunta
              {' '}
              {index}
              {result ? ': Acertou' : ': Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget;
