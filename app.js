require('dotenv').config();
const express = require('express');
const cors = require('cors');
const loadModulesRoutes = require('./src/routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Load Dynamic Routes
loadModulesRoutes(app);

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));