import React from 'react';
import { renderToString } from 'react-dom/server';
import RouteConfig from '../../client/utils/RouteConfig';
import ContextProvider from '../../client/components/ContextProvider'
import App from '../App'

export default (req, content) => {
  const routeConfig = RouteConfig[req.path];
  const css = new Set()
  const context = {
    insertCss: (...styles) =>
      styles.forEach(style => css.add(style._getCss()))
  }

  const props ={
    context: context,
    path: req.path
  }
  
  const ContextProviderHOC = ContextProvider(App);

  const navigation = renderToString(
    <ContextProviderHOC context={context}>
      <App {...props}/>
    </ContextProviderHOC>
  );

  return `
    <html>
      <head>
        <script src="/bundle.js" defer></script>
      </head>
      <body>
        <div id="root"><div>${content.header}${navigation}${content[routeConfig.name.toLowerCase()]}${content.footer}</div></div>
      </body>
    </html>`;
};
