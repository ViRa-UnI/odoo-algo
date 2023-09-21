```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```
This code generates the model for the User collection in MongoDB. It defines the schema for a user, including fields for username, email, password, balance, and createdAt. The username and email fields are required and unique, ensuring that each user has a unique username and email address. The balance field is a number that defaults to 0, representing the user's account balance. The createdAt field is a Date field that defaults to the current date and time when a new user is created.

The User model is exported as a module, allowing it to be imported and used in other parts of the application.