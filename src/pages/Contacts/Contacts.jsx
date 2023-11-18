import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { ContainerStyled, H1Styled } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ContainerStyled>
      <H1Styled>Phonebook</H1Styled>
      <ContactForm />
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </ContainerStyled>
  );
}
