import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Login from './pages/Login';
import Orders from './pages/Orders';

export default function Routes() {
  return (
    <div className="container">
      <Header />
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/orders" exact component={Orders} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  )
}
