import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListNavStyled = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;

  font-size: 40px;
  font-weight: 400;
`;
export const StyledLink = styled(NavLink)`
  &.active {
    font-weight: 600;
    color: #457878;
  }
`;