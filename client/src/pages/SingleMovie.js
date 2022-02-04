import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIE } from '../utils/queries';
import Auth from '../utils/auth';
import { Card } from 'react-bootstrap';

const SingleMovie = ()=> {
  const loggedIn = Auth.loggedIn();
  const { id: movieId} = useParams();

  const { loading, data } = useQuery(QUERY_MOVIE, {
    variables: { id: movieId }
  });
  console.log(data)
  const movie = data?.movie || {};
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='col-3'>
        <Card border='0' className='p-3 bg-transparent' >
          <Card.Body>
            
            
              <a href={movie.movieUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Card.Img src={movie.moviePicUrl}></Card.Img>
              <Card.Title className='text-info bg-dark my-2'>{movie.movieTitle}</Card.Title>
              <Card.Text className='text-info bg-dark my-2'>Overview</Card.Text>
              </a>
            
          </Card.Body>
        </Card>
      </div>
    </>
    
  );
};

export default SingleMovie;