const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let itinerary = [];

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Get all itinerary items
app.get('/itinerary', (req, res) => {
  res.status(200).json(itinerary);
});

// Add a new destination to the itinerary
app.post('/itinerary', (req, res) => {
  const { destination, date, notes } = req.body;
  const newItem = { destination, date, notes };
  itinerary.push(newItem);
  res.status(201).send(newItem);
});

// Run the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = {
  addTrip,
  deleteTrip,
  recommendDestination
};

