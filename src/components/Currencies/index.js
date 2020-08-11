// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './currencies.scss';
import Currency from './Currency';

/*
input est un champs contrôlé : quand on saisit un car. au lieu de stocker
la nouvelle valeur dans le DOM, il informe son parent que la valeur à changé
=> mise à jour du state, nouveau rendu, et donc la valeur est mise à jour dans le DOM
Pour cela on ajoute ine info dans le state et on a 2 props :
- une qui permet d'obtenir la valeur stockée dans le state (search)
- une qui permet de déclancher un maj de la valeur stockée dans le state (setSearch)
*/

// responsabilité : créer le bloc des devises, boucler sur les devises
const Currencies = ({
  moneys,
  setCurrency,
  search,
  setSearch,
}) => (
  <main className="currencie">
    <input
      className="currencie-search"
      type="text"
      placeholder="Rechercher une devise"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
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
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Currencies;
