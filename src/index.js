import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function() {
    console.log(`Application is running on http://localhost:${port}`);
});
