const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({ message: 'Erişim reddedildi. Token gerekli.' });
    }

    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = { id: decoded.id };

        next();
    }catch (error) {
        return res.status(401).json({ message: 'Geçersiz veya süresi dolmuş token.' });
    }
}

module.exports = authMiddleware;