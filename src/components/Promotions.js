import React from 'react';
import { connect } from 'react-redux';
import '../styles/promotions.css'
import ProductPromotion from './ProductPromotion';

class Promotions extends React.Component {
  render() {
    const { promotions } = this.props;
    return (
      <div className="promotions-container">
        <h2 className="subtitle-promotions">Promoções</h2>
        <div className="porcent-products-container">
          <div className="porcent-container"> 
            <span className="span-porcent">10% de desconto</span>
            <span className="span-porcent">25% de desconto</span>
            <span className="span-porcent">45% de desconto</span>
            <span className="span-porcent">60% de desconto</span>
          </div>
          <div className="products-promotions">
            { promotions.map((product) => <ProductPromotion product={ product } />) }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  promotions: state.stateHome.promotions,
});

export default connect(mapStateToProps, null)(Promotions);
