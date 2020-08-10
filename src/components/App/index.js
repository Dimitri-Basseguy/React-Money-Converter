// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Results from 'src/components/Results';
import CustomButton from 'src/components/CustomButton';
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
  // constructor(props) {
  //   // On appelle le constructeur de react.component avec les props
  //   super(props);
  //   // On crée le state de notre appli
  //   this.state = {
  //     open: false,
  //   };

  //   // sur les méthode que j'écris, il faut attacher this ("bind")
  //   // je remplace la méthode par version enrichie avec this
  //   // this.handleClic = this.handleClic.bind(this);
  // }

  state = {
    // wheter the currencies block is opened
    open: false,
    // amount in source currencies, (displayed in the header)
    baseAmount: 1,
    // target currency
    currency: 'United States Dollar',
  };

  // grâce au plugin babel "@babel/plugin-proposal-class-properties" dans le fichier ".babelrc"
  // au lieu de définir une méthode, je définis une propriété
  handleClic = () => {
    // j'ai accès à this sans avoir besion de bind
    // console.log(this);
    // console.log('clic');

    // changer quelque chose dans le state : envoi de la nouvelle valeur avec setState
    // On fournit un objet qui décrit les changements à appliquer au state
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      open: !this.state.open,
    });
    // dès que le state change (ou les props) React refait automatiquement le rendu du composant
    // il rappel la method render()
  }

  // calcul du montant (conversion du montant de base vers la devise cible)
  computeAmount = () => {
    // récup les infos utiles dans le state
    const { baseAmount, currency } = this.state;
    // récup le taux de change dans currencies
    const foundCurrency = datas.find((data) => data.name === currency);
    console.log(foundCurrency);

    // multiplier par le taux
    // destructuring = const rate = foundCurrency.rate;
    const { rate } = foundCurrency;
    const result = baseAmount * rate;

    // On arrondit en ne gardant que deux décimales
    return Number(result.toFixed(2));
  };

  setCurrency = (name) => {
    console.log(`Comp. Currencies : ${name}`);
  }

  render() {
    const { open, baseAmount, currency } = this.state;
    const resultAmount = this.computeAmount();

    return (
      <div className="app">
        <Header amount={baseAmount} />
        <CustomButton open={open} manageClick={this.handleClic} />
        {open && <Currencies moneys={datas} setCurrency={this.setCurrency} />}
        <Results currency={currency} amount={resultAmount} />
      </div>
    );
  }
}

// == Export
export default App;
