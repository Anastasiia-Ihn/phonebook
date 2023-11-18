import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListNavStyled = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;

  font-size: 35px;
`;
export const StyledLink = styled(NavLink)`
  cursor: pointer;

  padding-top: 15px;
  padding-bottom: 15px;

  &.active {
    font-weight: 600;
    color: #c70c0c;
  }
`;
