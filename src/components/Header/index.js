// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './header.scss';

const Header = ({ amount, setAmount }) => (
  <header className="header">
    <h1 className="header-title">Converter</h1>
    <p className="header-info">
      <input
      className="amount-input"
      type="text"
      placeholder="Inqiquer un montant"
      value={amount}
      onChange={(event) => setAmount(event.target.value)}
      />
      euro(s)
    </p>
  </header>
);

Header.propTypes = {
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.func.isRequired,
};

export default Header;
