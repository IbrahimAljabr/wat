const User = require("../model/user");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
    const { email, password: plainTextPassword } = req.body;

    if (!email) {
        return res.json({ status: "error", error: "Invalid email" });
    }

    if (!plainTextPassword) {
        return res.json({ status: "error", error: "Invalid password" });
    }

    const password = await bcrypt.hash(plainTextPassword, 10);

    try {
        const response = await User.create({
            email,
            password
        });

        console.log("User created successfully: ", response);
    } catch (error) {
        if (error.code === 11000) {
            // duplicate key
            return res.json({
                status: "error",
                error: "email already in use"
            });
        }
        throw error;
    }

    res.json({ status: "ok", data: req.body });
};

module.exports = {
    signup
};
