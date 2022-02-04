import { Link } from 'react-router-dom';
import React from 'react';
import Auth from '../../utils/auth';
import { Jumbotron, Container } from 'react-bootstrap';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

 

  return (
    <>
    <nav className="text-end">
          {Auth.loggedIn() ? (
            <>
              
              <a  style={{ textDecoration: 'none'}} className='mx-4 fs-2 text-dark' href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link style={{ textDecoration: 'none'}} className='mx-3 fs-2 text-dark' to="/login">Login</Link>
              <Link style={{ textDecoration: 'none'}} className='mx-3 fs-2 text-dark' to="/signup">Signup</Link>
            </>
          )}
        </nav>
    <div className='Jumbotron'>
      {/* <Container> */}
        <Link to="/" style={{ textDecoration: 'none'}}>
          <h1 className='display-4 text-secondary' >4amigos Movies</h1>
        </Link>
      {/* </Container> */}
      
    </div>
  </>
  );
};

export default Header;
