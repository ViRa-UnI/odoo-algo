```javascript
const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  result: {
    type: String,
    enum: ['win', 'loss', 'pending'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Bet = mongoose.model('Bet', betSchema);

module.exports = Bet;
```
This is the code for the file `models/Bet.js`. It defines the schema for the `Bet` model using Mongoose. The `Bet` model represents a bet made by a user on a game. It includes fields for the user who made the bet, the game on which the bet was made, the amount of the bet, the result of the bet (win, loss, or pending), and the creation date of the bet.

The `user` field is a reference to the `User` model, and the `game` field is a reference to the `Game` model. This allows for easy retrieval of the user and game information associated with a bet.

The `amount` field is a number representing the amount of the bet. The `result` field is an enumeration with three possible values: 'win', 'loss', or 'pending'. The `createdAt` field is a date field that is automatically set to the current date and time when a new bet is created.

Finally, the `Bet` model is exported so that it can be used in other parts of the application.