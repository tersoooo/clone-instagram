const Post = require('../models/post');
const User = require('../models/user');

const createPost = async (req, res) => {
    try {
        const {imageUrl, caption} = req.body;
        const userId = req.user.id;

        const post = await Post.create({imageUrl, userId, caption});
        res.status(201).json({ message: 'Gönderi Başarıyla Oluşturuldu1', post });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Gönderi oluşturulamadı.', error});
    }
}

const getAllPosts = async (req, res) => {
    try {
        console.log('Fetching posts...');
        const posts = await Post.findAll({
            include: {
                model: User,
                as: 'user',
                attributes: ['id', 'username'],
            },
            order: [['createdAt', 'DESC']],
        })
        console.log('Posts fetched successfully:', posts); // Gelen postları loglayalım
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Gönderiler getirilemedi.', error});
    }
}

module.exports = {createPost, getAllPosts};