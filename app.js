import express from 'express';

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
    res.status(200).json({'text': 'hello from express'});
})

export default app;

