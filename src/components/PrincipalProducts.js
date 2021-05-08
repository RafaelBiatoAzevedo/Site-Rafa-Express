import React from 'react';
import { connect } from 'react-redux';
import { getProductsByName } from '../action';
import '../styles/principalProducts.css'

class PrincipalProducts extends React.Component {
  render() {
    const { saveProducts } = this.props;
    return (
      <div>
        <h2 className="subtitle-principal-products">Destaques</h2>
        <div className="principal-container">
          <div className="principal-product" onClick={ () => saveProducts('Tv') }>
            <img
              src="http://http2.mlstatic.com/D_851614-MLA42943034715_072020-I.jpg"
              alt="tv"
            />
            <h3>TVs</h3>
          </div>
          <div className="principal-product" onClick={ () => saveProducts('Celular') }>
            <img
              src="http://http2.mlstatic.com/D_760654-MLA44557480423_012021-I.jpg"
              alt="Celular"
            />
            <h3>Celulares</h3>
          </div>
          <div className="principal-product" onClick={ () => saveProducts('Notebook') }>
            <img
              src="http://http2.mlstatic.com/D_603081-MLA43371924950_092020-I.jpg"
              alt="Notebook"
            />
            <h3>Notebooks</h3>
          </div>
          <div className="principal-product" onClick={ () => saveProducts('SmartWatch') }>
            <img
              src="http://http2.mlstatic.com/D_817199-MLA44926138593_022021-I.jpg"
              alt="SmartWatch"
            />
            <h3>SmartWatchs</h3>
          </div>
          <div className="principal-product" onClick={ () => saveProducts('Lavadoura') }>
            <img
              src="http://http2.mlstatic.com/D_898647-MLA43368834554_092020-I.jpg"
              alt="Lavadoura"
            />
            <h3>Lavadouras</h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveProducts: (value) => dispatch(getProductsByName(value)),
});

export default connect(null, mapDispatchToProps)(PrincipalProducts);
