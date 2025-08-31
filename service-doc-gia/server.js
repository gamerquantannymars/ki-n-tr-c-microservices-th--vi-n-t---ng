const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.get('/docgia', (req, res) => {
    res.send('Danh sách độc giả');
});

app.listen(port, () => {
    console.log(`Service Độc Giả đang chạy trên http://localhost:${port}`);
});
