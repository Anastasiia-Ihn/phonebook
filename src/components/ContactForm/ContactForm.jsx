import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  BtnAddContact,
  ErrorMsg,
  FieldForm,
  StyledForm,
} from './ContactForm.styled';

import { addContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

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
        <label>
          Name
          <FieldForm name="name" />
          <ErrorMsg component="p" name="name" />
        </label>

        <label>
          Number
          <FieldForm type="tel" name="number" />
          <ErrorMsg component="p" name="number" />
        </label>

        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </StyledForm>
    </Formik>
  );
};
