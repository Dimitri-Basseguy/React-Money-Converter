// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Results from 'src/components/Results';
import './app.scss';
// Import Data
import datas from 'src/data/currencies';

// pour gérer un state react (état de mon appli), 2 possibilités :
// - transformer le compsant en class
// - utiliser le hook useState

// parenthèse si JSX sur plusieur lignes
// {open && (
//   <div>
//     <p>ligne 1</p>
//   </div>
// )}

// Composant sous forme de class : render() retourne le JSX
class App extends React.Component {
  // Constructeur : On passe props en paramètre, même si on n'en a pas
  constructor(props) {
    // On appelle le constructeur de react.component
    super(props);
    // On crée le state de notre appli
    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;

    return (
      <div className="app">
        <Header />
        {open && <Currencies moneys={datas} />}
        <Results />
      </div>
    );
  }
}

// == Export
export default App;
