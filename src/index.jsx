import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './routes/Home';
import About from './routes/About';
import SemanticUI from './routes/Semantic';
import DataFetch from './routes/DataFetch';
import NavBar from './components/Navbar';
import ReactDOM from 'react-dom';
//import '!style!css!semantic-ui-css/semantic.min.css'; //use Global CSS since this is a third party component
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

class Root extends Component {

  render() {
    console.log("Root re-rendered");
    return (
      <div className="container theme-showcase">
        <NavBar />
           {React.cloneElement(this.props.children, { ...this.state$ })}
      </div>
    );
  }
}

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="json" component={DataFetch} />
      <Route path="semantic" component={SemanticUI} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);

const container = document.getElementById('app');
ReactDOM.render(router, container);
