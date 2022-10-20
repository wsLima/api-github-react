import React from 'react';

import { Container, Header, Avatar, Login, Name } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/54212652?v=4" />
      <Login>wsLima</Login>
      <Name>Kennedy Lima</Name>
    </Header>
  </Container>
);

export default Profile;
