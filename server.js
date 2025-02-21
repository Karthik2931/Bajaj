const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// GET method: Returns a hardcoded operation code
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// POST method: Processes input data
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input format" });
    }

    const user_id = "Nadella Jnana Karthik Kumar _ 29082005"; // Replace with actual user_id
    const email = "22BCS16229@cuchd.in";
    const roll_number = "22BCS16229";

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));
    const highest_alphabet = alphabets.length ? [alphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
