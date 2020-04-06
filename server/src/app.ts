import express from 'express';

const app = express();
const port = 8000;

app.get('/', (_req , res) => {
  res.send('Hello world!');
});

app.listen(port, err => {
  if (err) {
    // tslint:disable-next-line: no-console
    return console.error(err);
  }
  // tslint:disable-next-line: no-console
  return console.info(`server is listening on ${port}`);
});