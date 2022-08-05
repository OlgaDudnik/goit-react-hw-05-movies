import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { ApiDetails } from 'services/Api';
import styles from '../styles/styles.module.css';
import { ImArrowLeft } from 'react-icons/im';
import defaultImg from '../images/avatar.png';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    ApiDetails(movieId).then(data => setFilm(data));
  }, [movieId]);

  const poster =
    film?.poster_path && `https://image.tmdb.org/t/p/w500/${film?.poster_path}`;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const query = location?.state?.from?.search;

  return (
    <>
      {film && (
        <div>
          <Link className={styles.GoBack} to={backLinkHref}>
            <span>
              <ImArrowLeft style={{ marginRight: 8 }} />
            </span>
            Go back
          </Link>
          <div className={styles.Location}>
            <img
              src={film.poster_path ? poster : defaultImg}
              alt=""
              width={300}
            />
            <div>
              <h2>{film.title}</h2>
              <h3>Overview</h3>
              <p>{film.overview}</p>
              <span>User Score: {Math.round(film.vote_average * 10)} %</span>
              <h3>Genres</h3>
              <ul>
                {film?.genres?.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>

          <ul className={styles.List}>
            Additional information
            <li>
              <Link to="cast" state={{ from: `/movies${query}` }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: `/movies${query}` }}>
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
