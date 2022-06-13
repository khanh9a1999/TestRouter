import React from 'react';
import { Navigation } from './components/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './pages/home';
import { About } from './pages/about'
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route path='/' component={Home} />
        <Route path='/' component={Product} />

        <Route path='/' component={About} />

      </Router>
    </div>
  );
}

export default App;
