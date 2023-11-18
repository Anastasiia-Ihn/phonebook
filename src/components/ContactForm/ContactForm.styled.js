import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content:space-between;
  flex-direction: column; 
  gap: 15px;
  padding: 15px;
  width: 400px;
  margin-bottom:40px;
 
 
 border: 1px solid #159876;
  border-radius: 5px;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const FieldForm = styled(Field)`
  padding: 5px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;

