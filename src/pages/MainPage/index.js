import React from 'react';

import { Container, Logo, Title } from './styles';

import githubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => (
  <Container>
    <Logo src={githubLogo} alt="API Github" />
    <Title>API Github</Title>
  </Container>
);

export default MainPage;
