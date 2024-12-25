const express = require('express');
const { connectDB, sequelize } = require('./src/config/database')
const cors = require('cors');
const bodyParser = require('body-parser')
const authRoutes = require('./src/routes/authRoutes')
const postRoutes = require('./src/routes/postRoutes');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(bodyParser.json());

connectDB();

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)

app.listen(PORT, () => console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`));