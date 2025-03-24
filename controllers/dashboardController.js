const getDashboardData = (req, res) => {
  res.json({ message: 'Welcome to the Dashboard', user: req.user });
};

module.exports = { getDashboardData };

  