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
if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}

function addTrip(trips, trip) {
  trips.push(trip);
  return trips;
}

function deleteTrip(trips, index) {
  trips.splice(index, 1);
  return trips;
}

function recommendDestination(dish) {
  if (!dish) return "Select a dish";

  const map = {
    pasta: "Italy",
    pizza: "Italy",
    sushi: "Japan",
    ramen: "Japan",
    tacos: "Mexico",
    burritos: "Mexico",
    croissant: "France",
    baguette: "France",
    paella: "Spain",
    bratwurst: "Germany",
    curry: "India",
    pho: "Vietnam",
    padthai: "Thailand",
    kebab: "Turkey",
    fishandchips: "United Kingdom",
    pierogi: "Poland",
    gnocchi: "Italy",
    falafel: "Israel",
    shawarma: "Lebanon",
    bibimbap: "South Korea",
    dumplings: "China",
    poutine: "Canada"
  };

  return map[dish.toLowerCase().replace(/\s/g, "")] || "Select a dish";
}



module.exports = {
  addTrip,
  deleteTrip,
  recommendDestination,
  app
};

