import express from 'express';
import loadContent from './helpers/LoadContent';
import renderer from './helpers/Renderer';

const app = express();

app.use(express.static('public'));

app.get('/favicon.ico', (req, res) => res.send(204));

app.get('*', (req, res) => {
  loadContent(req).then((response) => {
    res.send(renderer(req, response));
  });
});

app.listen(3000, () => {
  console.log('Listening on prot 3000');
});
