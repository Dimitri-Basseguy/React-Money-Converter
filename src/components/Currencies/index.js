// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './currencies.scss';

const Currencies = ({ moneys }) => {
  console.log(moneys);
  return (
    <div className="currencie">
      <h2 className="currencie-title">Currencies</h2>
      <ul>
        {moneys.map((money) => (
          <li key={money.name.toString()} className="currencie-money">{money.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Validation des props
Currencies.propTypes = {
  // moins précis
  // moneys: PropTypes.arrayOf(PropTypes.object).isRequired,

  // plus précis
  moneys: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Currencies;
