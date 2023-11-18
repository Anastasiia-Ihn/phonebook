import { useDispatch, useSelector } from 'react-redux';
import { FormInput, InputStyled } from './Filter.styled';
import { setFilter } from 'redux/contacts/filtersSlice';
import { selectFilters } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilters) ?? '';
  const dispatch = useDispatch();

  const changeFilter = evt => dispatch(setFilter(evt.target.value));

  return (
    <FormInput>
      <label >Find contacts by name</label>{' '}
      <InputStyled
        type="text"
    
        name="input"
        value={filter}
        onChange={changeFilter}
      />
    </FormInput>
  );
};
