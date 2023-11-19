import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FieldInput, StyledFormLogin } from './LoginForm.styled';
import { Button } from 'components/GlobalStyle';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="mail">Email</label>
      <FieldInput type="email" name="email" id="mail" />
      <label htmlFor="password">Password</label>
      <FieldInput type="password" name="password" id="password" />
      <Button type="submit">Log In</Button>
    </StyledFormLogin>
  );
};
