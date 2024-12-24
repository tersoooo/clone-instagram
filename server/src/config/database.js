const { Sequelize } = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
);

const connectDB = async () => {
    try{
        await sequelize.authenticate();
        console.log('📡 Veritabanına başarıyla bağlanıldı!');
    }catch (error) {
        console.error('❌ Veritabanı bağlantı hatası:', error);
        process.exit(1);
    }
}

module.exports = { sequelize, connectDB }