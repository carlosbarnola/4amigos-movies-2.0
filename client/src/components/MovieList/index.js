import React from 'react';
// import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'

const MovieList = () => {
  return (
  <Card class="card" >
    <a href='https://www.themoviedb.org/movie/559-spider-man-3?language=en-US' target="_blank" rel="noopener noreferrer">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">Spiderman</p>
      </div>
    </a>
  </Card>
  )
}

export default MovieList