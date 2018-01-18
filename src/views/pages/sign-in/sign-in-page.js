import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authActions } from 'src/auth';
import Button from 'src/views/components/button';

import './sign-in-page.css';


const SignInPage = ({ signInWithGithub, signInWithGoogle, signInWithTwitter, signInWithFacebook }) => {
  return (
    <div className="slide-in-bottom">
      <div className="login-box">
        <h1 className="Alegreya">To Get Started...</h1>
        {/*
        <Button className="sign-in__button" onClick={signInWithFacebook}>Facebook</Button>
        <Button className="sign-in__button" onClick={signInWithGithub}>GitHub</Button>
        <Button className="sign-in__button" onClick={signInWithGoogle}>Google</Button>
        <Button className="sign-in__button" onClick={signInWithTwitter}>Twitter</Button>
        */}
        <button className="social-button Alegreya" id="facebook-connect" onClick={signInWithFacebook} >
          <span>Connect with Facebook</span>
        </button>
        <button className="social-button Alegreya" id="google-connect" onClick={signInWithGoogle}>
          <span>Connect with Google</span>
        </button>
        <button className="social-button Alegreya" id="twitter-connect" onClick={signInWithTwitter}>
          <span>Connect with Twitter</span>
        </button>
        <button className="social-button Alegreya" id="github-connect" onClick={signInWithGithub}>
          <span>Connect with Github</span>
        </button>
      </div>
    </div>
  );
};

SignInPage.propTypes = {
  signInWithFacebook: PropTypes.func.isRequired,
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = {
  signInWithFacebook: authActions.signInWithFacebook,
  signInWithGithub: authActions.signInWithGithub,
  signInWithGoogle: authActions.signInWithGoogle,
  signInWithTwitter: authActions.signInWithTwitter
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignInPage)
);
