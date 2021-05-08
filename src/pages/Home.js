import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Products from '../components/Products';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default Home;
