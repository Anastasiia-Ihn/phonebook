import { Formik } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { ErrorMsg, FieldForm, StyledForm } from './ContactForm.styled';
import { Button } from '../GlobalStyle';

const builderSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('This field is required'),
  number: Yup.string().min(7, 'Too Short!').required('This field is required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(selectContacts);

  const onSubmit = (value, form) => {
    const isElem = listContacts.find(contact => contact.name === value.name);

    if (isElem) {
      alert(`${value.name} is already in contacts`);
      return;
    }

    dispatch(addContact(value));

    form.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={builderSchema}
      onSubmit={onSubmit}
    >
      <StyledForm>
        <label >Name</label>
        <FieldForm  name="name" placeholder="Enter name" />
        <ErrorMsg component="p" name="name" />
        <label >Number</label>
        <FieldForm  type="tel" name="number" placeholder="Enter number" />
        <ErrorMsg component="p" name="number" />
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
