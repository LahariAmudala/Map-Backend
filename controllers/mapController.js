const getMapData = (req, res) => {
  res.json({ 
    center: [20.5937, 78.9629], // Center of India
    zoom: 4 
  });
};

module.exports = { getMapData };
