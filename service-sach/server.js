const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.get('/sach', (req, res) => {
    res.send('Danh sách sách');
});

app.listen(port, () => {
    console.log(`Service Sách đang chạy trên http://localhost:${port}`);
});
