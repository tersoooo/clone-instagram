const User = require('../models/User')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    try{
        const { username, email, password, profilePicture } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            profilePicture,
        })
        res.status(201).json({ message: 'Kullanıcı başarıyla oluşturuldu!', newUser })
    }catch (err){
        console.error(err)
        res.status(500).json({ message : 'Kullanıcı oluşturulamadı', err })
    }
}

module.exports = { register };