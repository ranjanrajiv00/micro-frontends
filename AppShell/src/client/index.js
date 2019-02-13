import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { PreLoading } from './utils/PreLoading';
import ContextProvider from './components/ContextProvider'

const context = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    };
  },
}

PreLoading().then(() => {
  const ContextProviderHOC = ContextProvider(App);

  ReactDOM.hydrate(
      <ContextProviderHOC context={context}>
        <App />
      </ContextProviderHOC>,
    document.querySelector('#root')
  );
});