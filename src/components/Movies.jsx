import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ApiSearch } from '../services/Api';
import { ImSearch } from 'react-icons/im';
import styles from '../styles/styles.module.css';

const Movies = () => {
  const [movie, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams?.get('query') || '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    ApiSearch(query).then(data => setMovies(data.results));
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const queryString = event.target.elements.query.value;
    if (queryString.trim() === '') {
      return;
    }
    const form = event.currentTarget;
    setSearchParams({ query: queryString });
    form.reset();
  };

  const location = useLocation();

  return (
    <>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <input
          className={styles.SearchFormInput}
          type="text"
          name="query"
          placeholder="Search movies"
        />
        <button type="submit" className={styles.SearchButton}>
          <span>
            <ImSearch style={{ marginRight: 5 }} />
          </span>
        </button>
      </form>
      <ul>
        {movie.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
