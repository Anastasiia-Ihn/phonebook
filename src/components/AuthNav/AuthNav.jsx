import { NavLinkAuthStyled } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <div>
      <NavLinkAuthStyled  to="/register">
      Registration
      </NavLinkAuthStyled>
      <NavLinkAuthStyled  to="/login">
        Log In
      </NavLinkAuthStyled>
    </div>
  );
};