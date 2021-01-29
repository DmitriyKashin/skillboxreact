import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { App } from '../App';

import { Header } from '../shared/Header';
import { indexTemplate } from './indexTemplate';
import axios from 'axios';
import compression from 'compression';
import helmet from 'helmet';

const  PORT = process.env.PORT || 3000;

const app = express();

app.use(compression()); //gzip
app.use(helmet({
  contentSecurityPolicy: false, // for react
})); //headers



app.use('/static', express.static('./dist/client'));


app.get('/auth', (req, res) => {
  // req.query.code;
  console.log(req.query.code);
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${process.env.DOMAIN}/auth`,
    {
      auth: { username: process.env.CLIENT_ID, password:process.env.SECRET},
      headers: {'Content-type': 'application/x-www-form-urlencoded'}
    }
  ).then(({data}) => {
    res.send(
      indexTemplate(ReactDOMServer.renderToString(App()), data['access_token']),
    );
  })
  .catch(console.log);
  
});


// all routes except the above

app.get('*', (req, res) => {
  res.send(
    indexTemplate(ReactDOMServer.renderToString(App())),
  );
});


app.listen(PORT, () => {
  console.log(`Server just have started on ${process.env.DOMAIN}:${PORT}`);
});