import { NavLinkAuthStyled } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <div>
      <NavLinkAuthStyled  to="/registration">
      Registration
      </NavLinkAuthStyled>
      <NavLinkAuthStyled  to="/login">
        Log In
      </NavLinkAuthStyled>
    </div>
  );
};