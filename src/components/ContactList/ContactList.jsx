import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem } from './ContactList.styled';
import { deleteContact } from '../../redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Button } from 'components/GlobalStyle';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const delContact = idContact => {
    return dispatch(deleteContact(idContact));
  };

  return (

      <List>
        {visibleContacts?.map(({ id, name, number }) => (
          <ListItem key={id}>
            <div><p>{name}</p>
            <p>{number}</p></div>
            <Button onClick={() => delContact(id)}>Delete</Button>
          </ListItem>
        ))}
      </List>
 
  );
};
