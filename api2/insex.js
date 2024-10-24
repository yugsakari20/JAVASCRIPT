const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

// Middleware to parse JSON requests
app.use(express.json());

// Example of a simple GET route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Example of a simple POST route
app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received',
        data: data
    });
});

// Start the server
app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});
