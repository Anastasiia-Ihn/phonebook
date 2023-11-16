import { useDispatch, useSelector } from 'react-redux';
import { BtnDeleteContact, List, ListItem } from './ContactList.styled';
import { deleteContact } from '../../redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  const delContact = idContact => {
    return dispatch(deleteContact(idContact));
  };

  return (
    <List>
      {visibleContacts?.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <p>{name}</p>
          <p>{phone}</p>
          <BtnDeleteContact onClick={() => delContact(id)}>
            Delete
          </BtnDeleteContact>
        </ListItem>
      ))}
    </List>
  );
};
