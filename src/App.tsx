import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path='/' component={ Home } />
    </Router>
  );
}

export default App;
