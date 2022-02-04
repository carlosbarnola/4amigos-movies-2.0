import { useQuery } from '@apollo/client';
import { QUERY_MOVIES } from '../utils/queries';
import Auth from '../utils/auth';
import MovieList from '../components/MovieList';


import React from 'react';

const Home = () => {
  const loggedIn = Auth.loggedIn();

  const { data: movieData } = useQuery(QUERY_MOVIES);
  const movies = movieData?.movies || [];
  
  return (
    <main className='my-5'>
      
        <div className='container overflow-hidden'>
          <MovieList movies={movies}></MovieList>
        </div>
      
    </main>
  );
};

export default Home;
