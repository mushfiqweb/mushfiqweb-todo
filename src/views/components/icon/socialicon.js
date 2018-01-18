import React from 'react';
import PropTypes from 'prop-types';


const Icon = ({ name }) => {
  var cssClasses = '';
  var iconTitle = 'Logged in using ';
  switch (name) {
    case 'google':
      cssClasses = 'fa fa-google-plus-square fa-stack-1x';
      iconTitle += 'Google';
      break;
    case 'facebook':
      cssClasses = 'fa fa-facebook fa-stack-1x';
      iconTitle += 'Facebook';
      break;
    case 'github':
      cssClasses = 'fa fa-github fa-stack-1x';
      iconTitle += 'Github';
      break;
    case 'twitter':
      cssClasses = 'fa fa-twitter fa-stack-1x';
      iconTitle += 'Twitter';
      break;
    default:
      break;
  }

  return <span title={iconTitle} className="fa-stack fa-lg">    
    <i className={cssClasses} ></i>
  </span>;

};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};


export default Icon;
