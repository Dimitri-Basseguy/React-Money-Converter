// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './currencies.scss';

const Currencies = ({ moneys, setCurrency }) => {
  // onClick={callback} => la callback reçoit automatiquement event en argument
  // const handleClick_Old = (event) => {
  //   // fournir en argument la devise qui à reçu le clic
  //   // utiliser l'élément du DOM avec l'event en parametre
  //   // console.log(event.target.textContent);
  //   setCurrency(event.target.textContent);
  // };

  // 2eme façon de faire, utiliser la valeur de l'élément dans map (la façon React de faire)
  // Utilisation des donnée plutôt que le DOM
  const handleClick = (name) => {
    setCurrency(name);
  };

  return (
    <main className="currencie">
      <h2 className="currencie-title">Currencies</h2>
      <ul>
        {moneys.map((money) => (
          <li
            key={money.name.toString()}
            className="currencie-money"
            onClick={() => {
              handleClick(money.name);
            }}
          >
            {money.name}
          </li>
        ))}
      </ul>
    </main>
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
  setCurrency: PropTypes.func.isRequired,
};

export default Currencies;
