import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/54212652?v=4" />
      <Login>wsLima</Login>
      <Name>Kennedy Lima</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        30 &nbsp; <i>seguidores</i> &nbsp; &middot; 10 &nbsp; <i>seguindo</i>
      </Data>
      <Data>
        <MdWork size={20} />
        Empresa
      </Data>
      <Data>
        <MdLocationCity size={20} />
        Manaus - AM
      </Data>
      <Data>
        <MdLink size={20} />
        <a href="http://wsLima.github.io">wsLima.github.io</a>
      </Data>
    </Inner>
  </Container>
);

export default Profile;
