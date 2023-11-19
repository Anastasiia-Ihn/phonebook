import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { DivLogIn, GreetingUser } from './UserMenu.styled';
import { Button } from 'components/GlobalStyle';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutHandle = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <DivLogIn>
      <GreetingUser>Welcome, {user.name}</GreetingUser>
      <Button type="button" onClick={logoutHandle}>
        Logout
      </Button>
    </DivLogIn>
  );
};
