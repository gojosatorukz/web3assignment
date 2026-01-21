const pool = require('../config/db');
const bcrypt = require('bcrypt');

exports.register = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        // Проверяем, есть ли такой юзер
        const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ error: "Пользователь уже существует" });
        }

        // Хешируем пароль
        const hashedPassword = await bcrypt.hash(password, 10);

        // Сохраняем
        const newUser = await pool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
            [email, hashedPassword]
        );

        res.status(201).json({ message: "Регистрация успешна", user: newUser.rows[0] });
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        
        if (result.rows.length === 0) {
            return res.status(401).json({ error: "Неверный email или пароль" });
        }

        const user = result.rows[0];
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ error: "Неверный email или пароль" });
        }

        res.status(200).json({ message: "Вход выполнен!", userId: user.id, email: user.email });
    } catch (err) {
        next(err);
    }
};