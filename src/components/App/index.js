// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Results from 'src/components/Results';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Currencies />
    <Results />
  </div>
);

// == Export
export default App;
