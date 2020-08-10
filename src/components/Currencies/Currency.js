import React from 'react';
import PropTypes from 'prop-types';

// responsabilité : afficher les devises
const Currency = ({ name, setCurrency }) => (
  <li
    className="currencie-money"
    onClick={() => {
      setCurrency(name);
    }}
  >
    {name}
  </li>
);

// Validation des props
Currency.propTypes = {
  name: PropTypes.string.isRequired,
  setCurrency: PropTypes.func.isRequired,
};

export default Currency;
