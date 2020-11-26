import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled.h1`
  margin-bottom: 60px;
  text-transform: uppercase;
  color: #333;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    width: 400px;
  }
`;

export const Input = styled.input`
  height: 44px;
  padding: 0 15px;
  border: 1px solid #888;
  border-radius: 6px;
  margin: 0 0 10px;
`;

export const Button = styled.button`
  height: 44px;
  padding: 0 15px;
  background: #10c3ef;
  color: #fff;
  border: 0;
  border-radius: 6px;
  margin: 5px 0 0;
  &:hover {
    background: ${darken(0.1, '#10c3ef')};
  }
`;
