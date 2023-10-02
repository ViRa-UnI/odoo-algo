```javascript
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  minBet: {
    type: Number,
    required: true
  },
  maxBet: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
```

This is the code for the `models/Game.js` file. It defines the schema for the `Game` model using Mongoose, which is an Object Data Modeling (ODM) library for MongoDB and Node.js. The schema includes fields such as `name`, `description`, `category`, `image`, `minBet`, `maxBet`, and `createdAt`. These fields represent the properties of a game, such as its name, description, category, image URL, minimum bet amount, maximum bet amount, and creation date.

The `Game` model is exported at the end of the file, allowing other parts of the application to use it to interact with the MongoDB database.