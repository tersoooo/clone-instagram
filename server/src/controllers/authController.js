const jwt = require('jsonwebtoken')
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

const login = async (req, res) => {
    const { email, password } = req.body
    try{
        const user = await User.findOne({ where : { email } })
        if (!user) return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: 'Şifre hatalı.' });
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' })
        res.json({ user, token });
    }catch (error) {
        res.status(500).json({ message: 'Giriş işlemi başarısız.', error });
    }
}

const me = async (req, res) => {
    try{
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'Token bulunamadı.' });

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findByPk(decoded.id, {
            attributes: ['id', 'username', 'email'],
        })
        if (!user) return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
        res.json(user)
    }catch (error) {
        res.status(401).json({ message: 'Geçersiz token.' });
    }
}

module.exports = { register, login, me };