// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './currencies.scss';

const Currencies = ({ moneys }) => (
  <div className="currencie">
    <h2 className="currencie-title">Currencies</h2>
    <ul>
      {moneys.map((money) => (
        <li key={money.name.toString()} className="currencie-money">{money.name}</li>
      ))}
    </ul>
  </div>
);

// Validation des props
// Validation des props
Currencies.propTypes = {
  moneys: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Currencies;
