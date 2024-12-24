const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')

const User = sequelize.define('User', {
    username : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'default-avatar.png',
    },
}, {
    tableName: 'users',
    timestamps: true
});

module.exports = User