import React from 'react';
import PropTypes from 'prop-types';

import './customButton.scss';

const CustomButton = ({ open }) => {
  const handleClick = () => {
    // console.log('click');

    // je voudrais mettre à jour open dans le state
  };

  // appliquer la classe custom-button--open seulement si state.open vaut true
  let className = 'custom-button';
  if (open) {
    className += ' custom-button--open';
  }

  return (
    <button className={className} type="button" onClick={handleClick}>=</button>
  );
};

CustomButton.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default CustomButton;
