import React, { useState } from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState();

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

  const repositories = [
    {
      id: '1',
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'wsLima.github.io',
      language: 'NodeJS',
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'wsLima.github.io',
      language: 'Javascript',
    },
    {
      id: '3',
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'wsLima.github.io',
      language: 'Typescript',
    },
    {
      id: '4',
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'wsLima.github.io',
      language: 'Java',
    },
    {
      id: '5',
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'wsLima.github.io',
      language: 'NodeJS',
    },
    {
      id: '6',
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'wsLima.github.io',
      language: 'Java',
    },
  ];

  const languages = getLangsFrom(repositories);
  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
