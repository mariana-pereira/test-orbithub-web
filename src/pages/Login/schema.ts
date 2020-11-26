import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  username: Yup
    .string()
    .required('You need to provide your username'),
  password: Yup
    .string()
    .required('You need to provide your password')
    .min(5),
});

export default signInSchema;
