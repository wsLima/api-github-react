import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

const RepositoriesPage = () => {
  const user = {
    login: 'wsLima',
    name: 'Kennedy Lima',
    avatar_url: 'https://avatars.githubusercontent.com/u/54212652?v=4',
    followers: 0,
    following: 0,
    company: 'wsLima Developers LTDA',
    blog: 'wsLima.github.io',
    location: 'Manaus - AM',
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
