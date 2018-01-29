import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import Header from "./Header"
import ProductsList from "./ProductsList"
import ProductsListItem from "./ProductsListItem"
import Product from "./Product"
import Admin from "./Admin"
import NoMatch from "./NoMatch"

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="container">
          <Header/>
          <Switch>
            <Route exact path="/" component={ProductsList}/>
            <Route exact path="/products" component={ProductsList}/>
            <Route exact path="/products/:id" component={Product}/>
            <Route path="/admin" component={Admin}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
