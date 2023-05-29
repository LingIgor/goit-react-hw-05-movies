// import { searchMovies } from 'api/api';
// import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchMovie = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  const updatetInput = e => {
    e.target.value
      ? setSearchParams({ query: e.target.value })
      : setSearchParams({});
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="">
          <input type="text" onChange={updatetInput} />
          <button type="submit">Search</button>
        </label>
      </form>
    </div>
  );
};

export default SearchMovie;
