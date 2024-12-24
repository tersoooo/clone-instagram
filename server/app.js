const express = require('express');
const { connectDB } = require('./src/config/database')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json());

connectDB();

app.listen(PORT, () => console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`));