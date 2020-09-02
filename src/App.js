import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateItem from "./components/create-list.component";
import EditList from "./components/edit-list.component";
import GroceryList from "./components/grocery-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-list"} className="nav-link">
                Grocery List Keeper
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-list"} className="nav-link">
                  Add Items
                </Link>
              </Nav>

              <Nav>
                <Link to={"/grocery-list"} className="nav-link">
                  Item List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateItem} />
                <Route path="/create-list" component={CreateItem} />
                <Route path="/edit-list/:id" component={EditList} />
                <Route path="/grocery-list" component={GroceryList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;