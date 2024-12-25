const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('../models/User');

const Post = sequelize.define('Post', {
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    caption: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'posts',
    timestamps: true,
});

Post.belongsTo(User, {
    foreignKey: 'userId', as : 'user'
});

module.exports = Post;