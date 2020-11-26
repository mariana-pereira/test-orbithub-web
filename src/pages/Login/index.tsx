import React from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../store';

import {
  Container, PageTitle, Form, Input, Button,
} from './styles';

const Login: React.FC = () => {
  const auth = useSelector((state: ApplicationState) => state.auth);

  return (
    <Container>
      <PageTitle>Sign to look for a beer.</PageTitle>
      <Form>
        <Input />
        <Input />
        <Button>Sign In</Button>
      </Form>
    </Container>
  );
};

export default Login;
