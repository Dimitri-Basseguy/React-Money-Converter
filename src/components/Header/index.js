// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './header.scss';

const Header = ({ amount }) => (
  <header className="header">
    <h1 className="header-title">Converter</h1>
    <p className="header-info">{amount} euro</p>
  </header>
);

Header.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default Header;
