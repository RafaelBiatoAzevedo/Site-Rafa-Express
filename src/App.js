import { Route, Switch } from 'react-router';
import './App.css';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/carrinho" component={ Cart } />
      <Route exact path="/detalhes-do-produto" component={ Details } />
      <Route path="*" component= { NoPage } />
    </Switch>
  )
}

export default App;
