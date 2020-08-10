// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './currencies.scss';
import Currency from './Currency';

// responsabilité : créer le bloc des devises, boucler sur les devises
const Currencies = ({ moneys, setCurrency }) => (
  <main className="currencie">
    <h2 className="currencie-title">Currencies</h2>
    <ul>
      {moneys.map((money) => (
        // start sous composant
        <Currency
          key={money.name}
          name={money.name}
          setCurrency={setCurrency}
        />
        // end sous composant
      ))}
    </ul>
  </main>
);

// Validation des props
Currencies.propTypes = {
  // moins précis
  // moneys: PropTypes.arrayOf(PropTypes.object).isRequired,

  // plus précis
  moneys: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  setCurrency: PropTypes.func.isRequired,
};

export default Currencies;
