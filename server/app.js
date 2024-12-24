const express = require('express');
const { connectDB, sequelize } = require('./src/config/database')
const authRoutes = require('./src/routes/authRoutes')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json());

connectDB();

// Routes
app.use('/api/auth', authRoutes)

app.listen(PORT, () => console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`));