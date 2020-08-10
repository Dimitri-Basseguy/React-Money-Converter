// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './result.scss';

// Composant de présentation : se contente d'afficher les props qu'il reçoit
const Results = ({ currency, amount }) => (
  <div className="result">
    <p className="result-calc">{amount}</p>
    <p className="result-money">{currency}</p>
  </div>
);

Results.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Results;
