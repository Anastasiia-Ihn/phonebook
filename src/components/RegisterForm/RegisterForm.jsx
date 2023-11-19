import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { StyledFormRegister } from './RegisterForm.styled';
import { Button } from 'components/GlobalStyle';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="name">Username</label>{' '}
      <input type="text" name="name" id="name" />
      <label htmlFor="mail">Email</label>
      <input type="email" name="email" id="mail" />
      <label htmlFor="password">Password</label>{' '}
      <input type="password" name="password" id="password" />
      <Button type="submit">Register</Button>
    </StyledFormRegister>
  );
};
