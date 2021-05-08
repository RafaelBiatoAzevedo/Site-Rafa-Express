import React from 'react';
import { categoriesThunk, getProductsByCategory, saveInput } from '../action';
import { connect } from 'react-redux';
import '../styles/navHome.css'

class Nav extends React.Component {
  componentDidMount() {
    const { saveCategories } = this.props;
    saveCategories();
  }

  render() {
    const { listCategories, saveProducts, category, saveInput } = this.props;
    return (
      <div>
        <nav className="nav-container">
          <select
            className="select-category"
            value={ category }
            onChange={ (evt) => {
              saveProducts(evt.target.value);
              saveInput('');
            }}
          >
            <option>Categorias</option>
            { listCategories.map((category) => <option key={ category.id } value={ category.id }>{ category.name }</option>) }
          </select>
          <a className="nav-a" href="blank">Baixe App</a>
          <a className="nav-a" href="blank">Mais Vendidos</a>
          <a className="nav-a" href="blank">Promoções da Semana</a>
          <a className="nav-a" href="blank">Promoções do Dia</a>
        </nav>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  listCategories: state.stateHome.categories,
  category: state.stateHome.category,
});

const mapDispatchToProps = (dispatch) => ({
  saveCategories: () => dispatch(categoriesThunk()),
  saveProducts: (value) => dispatch(getProductsByCategory(value)),
  saveInput: (value) => dispatch(saveInput(value)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Nav);
