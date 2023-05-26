import React from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import './Side.css';

function Side() {
  return (
    <div className="listGroupe">
      <ListGroup>
      <ListGroup.Item action variant="primary">
        <Link to="/">Accueil</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="success">
      <Link to="/a_propos">A Propos</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        <Link to="/contact">Contact</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="dark">
        <Link to="/list">Tous les etudiants</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="info">
        <Link to="/admis">Admis</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="warning">
        <Link to="/non_admis">Non admis</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        <Link to="/formation">Formation</Link>
      </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Side
