import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiReviews } from '../services/Api';
import styles from '../styles/styles.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ApiReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);
  return (
    <>
      <div>
        {reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <div key={id}>
              <p className={styles.Title}>Author: {author}</p>
              <p className={styles.Content}>{content}</p>
            </div>
          ))
        ) : (
          <p className={styles.Title}>
            We don`t have any reviews for this movie
          </p>
        )}
      </div>
    </>
  );
};

export default Reviews;
