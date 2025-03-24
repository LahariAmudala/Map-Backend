const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Dummy user data (replace with database later)
const users = [
  { username: 'admin', password: bcrypt.hashSync('password@123', 10) }
];

const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

module.exports = { login };
