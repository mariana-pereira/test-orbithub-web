import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';

import {
  Container, PageTitle, Form, Input, Button,
} from './styles';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data = { username, password };

    dispatch(signInRequest(data));
  };

  return (
    <Container>
      <PageTitle>Sign to look for a beer.</PageTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button>Sign In</Button>
      </Form>
    </Container>
  );
};

export default Login;
