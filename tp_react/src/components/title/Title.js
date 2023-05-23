import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Title.css';

function Title() {
  return (
    <div>
       <Navbar bg="dark">
        <Container id="container">
            <div>
                <Navbar.Brand href="/">
                    <img
                    src="/img/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </div>

            <div>
                <Navbar.Brand id="titre">TP REACT</Navbar.Brand>
            </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Title
