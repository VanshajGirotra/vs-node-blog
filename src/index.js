import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello World! its vanshaj'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
