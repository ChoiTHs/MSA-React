import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./App.css";
import data from "./data";

function App() {
  let [tshirt, setTshirt] = useState(data);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">KingSmile Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Cart</Nav.Link>
              <Nav.Link href="#link">Detail</Nav.Link>
              <NavDropdown title="회사소개" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">조직도</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  찾아오는길
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="jumbotron background">
        <h1 className="display-4">Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>

        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
      <div className="container">
        <div className="row">
          <Card />
        </div>
      </div>
    </div>
  );
}
function Card(props) {
  return (
    <div className="col-md-4">
      <img src="https://github.com/ai-edu-pro/busan/blob/main/t1.jpg?raw=truehttps://thumb.cjonstyle.net/unsafe/fit-in/236x236/itemimage.cjonstyle.net/goods_images/20/089/2035875089L.jpg?timestamp=20240722180523" />
      <h4>{props.title}</h4>
      <p>{props.content} </p>
      <p>{props.price}</p>
    </div>
  );
}

export default App;
