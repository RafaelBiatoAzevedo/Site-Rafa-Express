import React from 'react';
import { connect } from 'react-redux';
import CreditCard from './CreditCard';
import PrincipalProducts from './PrincipalProducts';
import Product from './Product';
import Promotions from './Promotions';

class Products extends React.Component {
  render() {
    const { listProducts } = this.props;
    if (listProducts.length === 0) return (
      <div>
        <PrincipalProducts />
        <CreditCard />
        <Promotions />
      </div>
    );
    return (
      <div className="products-container">
        { listProducts.map((product) => <Product product={ product }/>) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listProducts: state.stateHome.products,
});

export default connect(mapStateToProps, null)(Products);
