import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
const cors = require('cors');
import fs from 'fs';

import Product from '../src/Product';

const server = express();
const port = process.env.PORT || 8082;

server.use(cors());

function getPathToEmbedAssets() {
  const filesPath = {};
  const assetsPath = '/build/umd';
  fs.readdirSync(`${__dirname}/../${assetsPath}`)
    .forEach(fileName => {
      if (fileName.indexOf('.css') !== -1) {
        filesPath['css'] = `${assetsPath}/${fileName}`;
      }
      if (fileName.indexOf('.js') !== -1) {
        filesPath['js'] = `${assetsPath}/${fileName}`;
      }
    });

  return filesPath;
}

server.use('/build', express.static(`${__dirname}/../build`));

server.get('/api/assets', (req, res) => {
  res.json(getPathToEmbedAssets());
});

server.get('/render', (req, res) => {
  const product = renderToString(React.createElement(Product, null));
  res.send({
    product,
  });
});

server.use(express.static('build'));

server.listen(port, () => {
  console.log(`Product app listening on port ${port}`);
});