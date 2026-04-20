const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const projects = [
  { 
    id: 1, 
    category: "web", 
    title: "Food Delivery App", 
    description: "A full-stack food delivery platform with real-time order tracking, user authentication, and a dynamic restaurant menu system.", 
    tech: ["React", "Node.js", "MongoDB"], 
    icon: "🍔", 
    link: "#" 
  },
  { 
    id: 2, 
    category: "web", 
    title: "E-Commerce Store", 
    description: "A feature-rich online store with product filtering, cart management, payment integration, and admin dashboard.", 
    tech: ["HTML", "CSS", "JavaScript"], 
    icon: "🛒", 
    link: "#" 
  }
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/', (req, res) => {
  res.send('Portfolio Backend is Running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});