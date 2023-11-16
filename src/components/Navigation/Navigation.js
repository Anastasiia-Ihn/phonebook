import { ListNavStyled, StyledLink } from './Navigation.styled';

export const Navigation = () => (
  <nav>
    <ListNavStyled>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/contacts">Contacts</StyledLink>
      </li>
    </ListNavStyled>
  </nav>
);