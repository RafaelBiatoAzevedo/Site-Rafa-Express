import React from 'react';
import '../styles/creditCard.css'

class CreditCard extends React.Component {
  render() {
    return (
      <div className="credit-container">
        <div className="title-subtitle-credit">
          <h2>Adquira nosso cartão RAFAEXPRESS</h2>
          <h3>E tenha super descontos nas suas compras</h3>
        </div>
        <div>
          <img className="img-card" src="creditCard.jpeg" alt="card"/>
        </div>
      </div>
    );
  }
}

export default CreditCard;
