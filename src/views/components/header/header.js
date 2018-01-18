import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon/socialicon';

import './header.css';


const Header = ({ authenticated, signOut, authType }) => (
  <header className="header">
    <div className="g-row">
      <div className="g-col">
        <h1 className="header__title">A Simple Todo App</h1>

        <ul className="header__actions">
          {authenticated ? <li><Button onClick={signOut}>Sign out</Button></li> : null}
          <li>
            <Icon name={authType}/>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};


export default Header;
