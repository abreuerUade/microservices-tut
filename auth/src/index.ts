import express from 'express';

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).json({ data: 'OK!!' });
});
app.listen(3000, () => {
  console.log('Listening con port 3000');
});
