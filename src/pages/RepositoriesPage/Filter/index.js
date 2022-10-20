import React from 'react';

import { Container, Selector, Cleaner } from './styles';

const Filter = () => {
  const langs = [
    { name: 'JavaScript', count: 5, color: '#f1c40f' },
    { name: 'Shell', count: 3, color: '#009999' },
    { name: 'Java', count: 2, color: '#336600' },
    { name: 'Spring Boot', count: 6, color: '#9933ff' },
  ];

  const selectors = langs.map(({ name, count, color }) => (
    <Selector key={name.toLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
};

export default Filter;
