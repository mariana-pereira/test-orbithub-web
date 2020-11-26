import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { signInRequest } from '../../store/modules/auth/actions';
import { ApplicationState } from '../../store';

import schema from './schema';

import {
  Container, PageTitle, Form, Input, Button,
} from './styles';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector((state: ApplicationState) => state.auth.loading);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = { username, password };

    try {
      await schema.validate(data);

      dispatch(signInRequest(data));
    } catch (error) {
      toast.error(error.message);
    }
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
        <Button type="submit">{loading ? 'Loading' : 'Sign In'}</Button>
      </Form>
    </Container>
  );
};

export default Login;
