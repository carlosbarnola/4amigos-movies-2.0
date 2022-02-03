import React from 'react';
import { Card } from 'react-bootstrap';
// import { useQuery } from '@apollo/client';
// import { QUERY_MOVIES } from '../../utils/queries';



const MovieList = ( { movies }) => {
  if (!movies.length) {
    return <h3>No Thoughts Yet</h3>;
  }
  console.log(movies)
 
  return (
    <div className='row gy-5'>
      
  {movies.map(movie => (
    <div key={movie.movieUrl} className='col-3'>
  <Card border='0' className='p-3' >
    <Card.Body>
      
      
        <a href={movie.movieUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Card.Img src={movie.moviePicUrl}></Card.Img>
        <Card.Title>{movie.movieTitle}</Card.Title>
        <Card.Text>Description</Card.Text>
          
        </a>
      
    </Card.Body>
  </Card>
  </div>
  ))}
  </div>
  )
}

export default MovieList