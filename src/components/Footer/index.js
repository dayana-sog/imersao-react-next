/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { FooterWrapper } from './styles';

const Footer = (props) => (
  <FooterWrapper {...props}>
    <a href="https://www.alura.com.br/">
      <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
    </a>
    <p>
      Orgulhosamente criado durante
      {' '}
      a
      {' '}
      <a href="https://www.alura.com.br/">
        <span>Imersão React da Alura</span>
      </a>
    </p>
  </FooterWrapper>
);

export default Footer;
