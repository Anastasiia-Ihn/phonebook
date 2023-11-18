import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { HeaderStyled } from './AppBar.styled';

export const AppBar = () => {
  const  isLoggedIn  = useSelector(selectIsLoggedIn);

  return (
    <HeaderStyled >
          <Navigation />
        
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};