import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC, QUERY_MOVIES } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';
import Auth from '../utils/auth';
import FriendList from '../components/FriendList';
import ThoughtForm from '../components/ThoughtForm';
import MovieList from '../components/MovieList';


import React from 'react';

const Home = () => {
  const loggedIn = Auth.loggedIn();

  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || [];
  // console.log(thoughts);

  const { data: movieData } = useQuery(QUERY_MOVIES);
  const movies = movieData?.movies || [];
  
  return (
    <main className='my-5'>
      {/* <div className='container overflow-hidden'> */}
        <div className='container overflow-hidden'>
          <MovieList movies={movies}></MovieList>
        </div>
      {/* </div> */}
      {/* <div className='flex-row justify-space-between'>
        {loggedIn && (
          <div className="col-12 mb-3">
            <ThoughtForm />
          </div>
        )}
      <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
        )}
      </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div> */}
    </main>
  );
};

export default Home;
