const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Sample endpoint
app.get('/api/trades', (req, res) => {
    res.json([{ id: 1, details: 'Trade 1' }, { id: 2, details: 'Trade 2' }]);
});

app.listen(PORT, () => {
    console.log(`Backend service is running on port ${PORT}`);
});
