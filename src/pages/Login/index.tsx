import React from 'react';

import {
  Container, PageTitle, Form, Input, Button,
} from './styles';

const Login: React.FC = () => (
  <Container>
    <PageTitle>Sign to look for a beer.</PageTitle>
    <Form>
      <Input />
      <Input />
      <Button>Sign In</Button>
    </Form>
  </Container>
);

export default Login;
