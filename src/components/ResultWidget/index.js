/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';

import Widget from '../Widget';
import BackLinkArrow from '../BackLinkArrow';

function ResultWidget({ results }) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        Parabéns
        {' '}
        {name}
        ! Seu resultado foi:
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
