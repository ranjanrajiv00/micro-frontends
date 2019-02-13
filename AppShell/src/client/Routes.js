import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FactoryComponent from './components/FactoryComponent';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={FactoryComponent.Product} />
      <Route exact path="/product" component={FactoryComponent.Product} />
      <Route exact path="/cart" component={FactoryComponent.Cart} />
    </Switch>
  );
};