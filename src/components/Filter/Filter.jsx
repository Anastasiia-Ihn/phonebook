import { useDispatch, useSelector } from 'react-redux';
import { FormInput } from './Filter.styled';
import { setFilter } from 'redux/filtersSlice';
import { selectFilters } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilters) ?? '';
  const dispatch = useDispatch();

  const changeFilter = evt => dispatch(setFilter(evt.target.value));

  return (
    <FormInput>
      <label>
        Find contacts by name
        <input
          type="text"
          name="input"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </FormInput>
  );
};
