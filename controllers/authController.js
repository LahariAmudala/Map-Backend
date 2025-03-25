// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // Dummy user data (replace with database later)
// const users = [
//   { username: 'admin', password: bcrypt.hashSync('password@123', 10) }
// ];

// const login = (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(user => user.username === username);

//   if (!user || !bcrypt.compareSync(password, user.password)) {
//     return res.status(401).json({ message: 'Invalid username or password' });
//   }

//   const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   res.json({ token });
// };

// module.exports = { login };

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user'); // Import User model
require('dotenv').config();

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { login };
