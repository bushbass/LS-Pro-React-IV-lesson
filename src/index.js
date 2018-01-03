import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { render } from 'react-dom';
import About from './About';
import Projects from './Projects';
import ListPage from './FoodListPage';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const App = () => (
  <Router>
    <div style={styles}>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/food-list-page">Food list</Link>
        </li>
      </ul>

      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/food-list-page" component={ListPage} />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
