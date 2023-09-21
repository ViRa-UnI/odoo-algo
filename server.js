const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/games', require('./routes/games'));
app.use('/bets', require('./routes/bets'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});