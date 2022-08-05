import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiCast } from 'services/Api';
import styles from '../styles/styles.module.css';
import defaultImg from '../images/avatar.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    ApiCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <>
      {cast && (
        <div>
          {cast.map(({ id, name, profile_path, character }) => (
            <div key={id}>
              <p className={styles.title}>{name}</p>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                alt={name}
                width={150}
              />
              <p className={styles.Character}>Charecter: {character}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cast;
