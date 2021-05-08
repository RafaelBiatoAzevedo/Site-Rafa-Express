import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/noFound.css'

class NoPage extends React.Component {
  render() {
    return (
      <div className="noFound-container">
        <Link to="/">{`<--Voltar Home`}</Link>
        <h1>No Page Found</h1>
      </div>
    )
  }
}

export default NoPage;
