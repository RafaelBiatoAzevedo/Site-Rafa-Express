import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/productsDetails.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      cep: '',
      quantity: 1,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  updateState(evt) {
    const { name, value } = evt.target;
    this.setState((state) => ({ ...state, [name]: value }));
  }

  upOrDownQuantity(evt) {
    const { name } = evt.target;
    if (name === 'up') this
      .setState((state) => ({ ...state, quantity: state.quantity + 1 }));
    else this.setState((state) => {
      if (state.quantity > 1) return ({ ...state, quantity: state.quantity - 1 })
    });
  }

  renderBuy() {
    const { cep, quantity } = this.state;
    const { productPreCart } = this.props;
    const { price } = productPreCart;
    return (
      <div className="buy-container">
        <div>
          <label className="label-cep" htmlFor="inputCep">
          CEP
          <input
            className="input-cep"
            name="cep"
            value={ cep }
            onChange={ (evt) => this.updateState(evt) }
            id="inputCep"
            type="text"
          />
          </label>
        </div>
        <div className="values-container">
          <div className="values">
            <p>{ `Qtd ${ quantity } x ${ price.toFixed(2) }` }</p>
            <p>{ `R$ ${ (quantity * price).toFixed(2) }` }</p>
          </div>
          <div className="values">
            <p>Frete</p>
            <p>{ `R$ 0,00`}</p>
          </div>
          <div className="values">
            <p>Total</p>
            <p>{ `R$ ${ (quantity * price).toFixed(2) }` }</p>
          </div>
        </div>
        <button className="btn-buy btn-buy-details" type="button">COMPRAR</button>
        <Link to="/" className="link-cancel">Cancelar</Link>
      </div>
    );
  }

  renderProductsQuantity() {
    const { quantity } = this.state;
    const { productPreCart } = this.props;
    const { title, thumbnail, price, sold_quantity, condition, available_quantity } = productPreCart;
    return (
      <div className="products-details">
        <div className="img-container">
          <img className="img-details" src={ thumbnail } alt="product"/>
        </div>
        <div className="details-container">
          <div>
          <h3>{ title }</h3>
          { (condition === 'new') && <p>(Produto novo)</p> }
          </div>
          <p className="detail-price">{`R$ ${price.toFixed(2)}`}</p>
          <p>{ `10 x R$ ${(price / 10).toFixed(2)} sem juros no cartão`}</p>
          <p>{ `Vendidos ${sold_quantity} unid.` }</p>
          <p>{ `Disponível ${available_quantity} unid.`}</p>
          <div className="quantity-container">
            <button
              onClick={ (evt) => this.upOrDownQuantity(evt) }
              className="btn-down"
              type="button"
            >
              -
            </button>
            <span className="span-quantity">{ quantity }</span>
            <button
              disabled={ (available_quantity <= quantity) }
              onClick={ (evt) => this.upOrDownQuantity(evt) }
              name="up"
              className="btn-up"
              type="button"
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderHeader() {
    return (
      <div>
        <div className="header-details">
          <h1>Detalhes do Produto</h1>
        </div>
        <div className="links-container">
          <Link className="link-back" to="/">{`<`}</Link>
          <Link 
            className="link-cart" 
            to="/carrinho"
          >
            <img className="icon-cart" src="cart-icon.png" alt="icon"/>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        <div className="main-container">
          { this.renderProductsQuantity() }
          { this.renderBuy() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productPreCart: state.stateCart.preCart,
});

export default connect(mapStateToProps, null)(ProductDetails);
