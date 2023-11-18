import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { DivLogIn, GreetingUser } from './UserMenu.styled';
import { Button } from 'components/GlobalStyle';
// import { Button } from 'react-bootstrap';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <DivLogIn >
      <GreetingUser >Welcome, {user.name}</GreetingUser>
      <Button  type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </DivLogIn>
  );
};
