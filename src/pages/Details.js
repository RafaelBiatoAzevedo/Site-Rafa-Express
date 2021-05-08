import React from 'react';
import CreditCard from '../components/CreditCard';
import Footer from '../components/Footer';
import ProductDetails from '../components/ProductDetails';
import Promotions from '../components/Promotions';

class Details extends React.Component {
  render() {
    return (
      <div>
        <ProductDetails />
        <CreditCard />
        <Promotions />
        <Footer />
      </div>
    );
  } 
}

export default Details;
