import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Form } from 'components/SearchBox/SearchBoxStyled';

export const SearchBox = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSearch = event => {
    event.preventDefault();

    const query = value.trim();
    if (query === '') {
      Notify.warning('Enter something in the request', {
        fontSize: '16px',
        cssAnimationStyle: 'from-right',
      });
    }
    if (query) {
      onSearch(query);
      setValue('');
    }
  };
  return (
    <>
      <Form onSubmit={handleSearch}>
        <input
          value={value}
          onChange={event => setValue(event.target.value)}
          placeholder="Search for movies"
        />
        <button type="submit">Search</button>
      </Form>
    </>
  );
};
