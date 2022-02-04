import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MOVIES } from '../../utils/queries';



const MovieList = ( { movies }) => {
  if (!movies.length) {
    return <h3>No Movies Yet</h3>;
  }
  console.log(movies)
 
  return (
    <div className='row gy-5'>
      
  {movies.map(movie => (
    <div key={movie.movieUrl} className='col-3'>
  <Card border='0' className='p-3 bg-transparent' >
    <Card.Body>
      <Link to={`/movie/${movie._id}`} style={{ textDecoration: 'none' }}>
      
      
        <a href={movie.movieUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Card.Img src={movie.moviePicUrl}></Card.Img>
        <Card.Title className='text-info bg-dark my-2'>{movie.movieTitle}</Card.Title>
        <Link to={`/review/${movie._id}`} style={{ textDecoration: 'none' }}>
        <Card.Text className='text-info bg-dark my-2'>Review this movie</Card.Text>
        </Link>  
        </a>
      </Link>
    </Card.Body>
  </Card>
  </div>
  ))}
  </div>
  )
}

export default MovieList