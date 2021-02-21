import express from 'express';

const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send({
    file: '',
  });
});

app.listen('/', () => {
  console.log(`Now listening on port ${SVR_PORT}`);
});
