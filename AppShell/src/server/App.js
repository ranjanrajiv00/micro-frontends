

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Navigation from '../client/components/Navigation';

const App = (props) => {
  return (
    <StaticRouter context={props.context} location={props.path}>
        <Navigation />
    </StaticRouter>
  )
};

export default App;
