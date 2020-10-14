import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { App } from '../App';

import { Header } from '../shared/Header';
import { indexTemplate } from './indexTemplate';


const app = express();


app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(
    indexTemplate(ReactDOMServer.renderToString(App())),
  );
});


app.listen(3000, () => {
  console.log('Server just have started on http://localhost:3000 ');
});