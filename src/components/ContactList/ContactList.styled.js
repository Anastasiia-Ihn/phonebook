import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  padding: 15px;

  list-style: square;
  border: 1px solid #159876;
  border-radius: 5px;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;


export const ListItem = styled.li`
  display: flex;

  align-items: center;
  justify-content:space-between;
  margin-bottom: 10px;
`;

