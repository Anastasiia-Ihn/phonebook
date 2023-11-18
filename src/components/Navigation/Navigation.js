import { useSelector } from 'react-redux';
import { ListNavStyled, StyledLink } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const  isLoggedIn  = useSelector(selectIsLoggedIn);

  return <nav>
    <ListNavStyled>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      {isLoggedIn && (<li>
        <StyledLink to="/contacts">Contacts</StyledLink>
      </li>)}
    </ListNavStyled>
  </nav>
};