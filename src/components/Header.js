import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductsByName, saveCategory, saveGreeting, saveInput } from '../action';
import greeting from '../service/greeting';
import '../styles/headerHome.css';

class Header extends React.Component {
  componentDidMount() {
    const { saveGreeting } = this.props;
    saveGreeting();
  }
  
  render() {
    const { greeting, inputSearch, saveProducts, saveCategory, saveInput, counterProducts } = this.props;
    return (
      <div className="header-container">
        <div className="logo-input-container">
          <img className="img-logo" onClick={ () => {
            saveCategory('');
            saveInput('');
            saveProducts([]);
          }} 
            src="logoRafaExpressWhite.png" 
            alt="logo" 
          />
          <input
            value={ inputSearch }
            className="input-search"
            type="text"
            placeholder="O que você esta procurando ?"
            onChange={ (evt) => {
              saveProducts(evt.target.value);
              saveCategory('');
              saveInput(evt.target.value);
            }}
          />
          <div>
            <span className="header-greeting">{ `${greeting},`}</span>
            <span className="header-user">Rafael</span>
        </div>
        </div>
        <div className="cart-container">
          <Link to="/carrinho">
            <img className="cart-icon" src="cart-icon.png" alt="cart-icon" width="40px"/>
          </Link>
          <span className="cart-counter">{ counterProducts }</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  greeting: state.stateHome.greeting,
  inputSearch: state.stateHome.inputSearch,
  counterProducts: state.stateCart.productsCart.length,
});

const mapDispatchToProps = (dispatch) => ({
  saveGreeting: () => dispatch(saveGreeting(greeting())),
  saveProducts: (value) => dispatch(getProductsByName(value)),
  saveCategory: (value) => dispatch(saveCategory(value)),
  saveInput: (value) => dispatch(saveInput(value)),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Header);
