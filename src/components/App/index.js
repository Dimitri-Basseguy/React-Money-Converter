// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Results from 'src/components/Results';
import './app.scss';

// Import Data
import datas from 'src/data/currencies';

// == Composant
const App = () => {
  console.log(datas);

  return (
    <div className="app">
      <Header />
      <Currencies
        moneys={datas}
      />
      <Results />
    </div>
  );
};

// == Export
export default App;
