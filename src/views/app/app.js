import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { authActions, getAuth } from 'src/auth';
import Header from '../components/header';
import RequireAuthRoute from '../components/require-auth-route';
import RequireUnauthRoute from '../components/require-unauth-route';
import SignInPage from '../pages/sign-in';
import TasksPage from '../pages/tasks';
import { SocialLinks } from "../../utils/constants";

const App = ({ authenticated, signOut, authType }) => (
  <div>
    <Header
      authType={authType}
      authenticated={authenticated}
      signOut={signOut}
    />

    <main>
      <RequireAuthRoute authenticated={authenticated} exact path="/" component={TasksPage} />
      <RequireUnauthRoute authenticated={authenticated} path="/sign-in" component={SignInPage} />
    </main>

    <footer>
      <div className='footer-div'>
        <div>
          <a href={SocialLinks.facebook} target='_blank' >
            <i className="fa fa-facebook pulse fb"></i>
          </a>
        </div>

        <div>
          <a href={SocialLinks.twitter} target='_blank' >
            <i className="fa fa-twitter pulse twitter"></i>
          </a>
        </div>

        <div>
          <a href={SocialLinks.stackOverFlow} target='_blank' >
            <i className="fa fa-stack-overflow pulse stacko"></i>
          </a>
        </div>

        <div>
          <a href={SocialLinks.github} target='_blank' >
            <i className="fa fa-github pulse github"></i>
          </a>
        </div>

        <div>
          <a href={SocialLinks.instagram} target='_blank' >
            <i className="fa fa-instagram pulse insta"></i>
          </a>
        </div>
        <div>
          <a href={SocialLinks.flickr} target='_blank' >
            <i className="fa fa-flickr pulse flickr"></i>
          </a>
        </div>

        <div>
          <a href={SocialLinks.gplus} target='_blank' >
            <i className="fa fa-google-plus pulse gp"></i>
          </a>
        </div>

        <div>
          <a href={SocialLinks.lastfm} target='_blank' >
            <i className="fa fa-lastfm pulse lastfm"></i>
          </a>
        </div>

        <div>
          <a href={SocialLinks.linkedIn} target='_blank' >
            <i className="fa fa-linkedin pulse in"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
);

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
