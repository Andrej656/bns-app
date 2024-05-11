// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Earn from './pages/Earn';
import Marketplace from './pages/Marketplace';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/earn" component={Earn} />
        <Route exact path="/marketplace" component={Marketplace} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
