import React from 'react';
import PropTypes from 'prop-types';


const Icon = ({ name }) => {
  var cssClasses = '';
  switch (name) {
    case 'google':
      cssClasses = 'fa fa-google fa-stack-2x';
      break;
    case 'facebook':
      cssClasses = 'fa fa-facebook fa-stack-2x';
      break;
    case 'github':
      cssClasses = 'fa fa-github fa-stack-2x';
      break;
    case 'twitter':
      cssClasses = 'fa fa-twitter fa-stack-2x';
      break;
    default:
      break;
  }

  return <span className="fa-stack fa-lg">    
    <i className={cssClasses} ></i>
  </span>;

};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};


export default Icon;
