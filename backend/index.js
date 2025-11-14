const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

app.use(cors({ origin: true }))
app.use(express.json());


app.get('/api/hello', (req, res) => {
res.json({ message: 'Hello from backend! moidmoid'});
});


app.listen(port, () => console.log(`Backend listening on port ${port}`));