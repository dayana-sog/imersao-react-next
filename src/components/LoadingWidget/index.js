import React, { useContext } from 'react';
import Lottie from 'lottie-react-web';
import { ThemeContext } from 'styled-components';

import Widget from '../Widget';

import loadLight from '../../../load-light.json';
import loadDark from '../../../load-dark.json';

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

export default LoadingWidget;
