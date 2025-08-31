const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.get('/chomuon', (req, res) => {
    res.send('Quản lý cho mượn sách');
});

app.listen(port, () => {
    console.log(`Service Cho Mượn đang chạy trên http://localhost:${port}`);
});
