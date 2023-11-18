import { useDispatch, useSelector } from 'react-redux';
import { BtnDeleteContact, List, ListItem } from './ContactList.styled';
import { deleteContact } from '../../redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
// import { useEffect } from 'react';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
console.log(visibleContacts);

  const dispatch = useDispatch();


  // useEffect(()=>dispatch(fetchContacts()),[dispatch])
  const delContact = idContact => {
    return dispatch(deleteContact(idContact));
  };



  return (
    <List>
      {visibleContacts?.map(({ requestId, name, number }) => (
        <ListItem key={requestId}>
          <p>{name}</p>
          <p>{number}</p>
          <BtnDeleteContact onClick={() => delContact(requestId)}>
            Delete
          </BtnDeleteContact>
        </ListItem>
      ))}
    </List>
  );
};
