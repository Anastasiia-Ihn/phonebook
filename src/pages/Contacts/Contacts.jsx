import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { ContainerStyled, H1Styled, H2Styled } from './Contacts.styled';
import { selectContacts } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerStyled>
      <H1Styled>Phonebook</H1Styled>
      <ContactForm />

      <H2Styled>Contact list</H2Styled>
      {contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>You don't have any contact.</p>
      )}
    </ContainerStyled>
  );
}
