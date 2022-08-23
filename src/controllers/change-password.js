const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const changePassword = async (req, res) => {
    const { token, newPassword: plainTextPassword } = req.body;

    if (!plainTextPassword) {
        return res.json({ status: "error", error: "Invalid password" });
    }

    try {
        const user = jwt.verify(token, JWT_SECRET);

        console.log(`🚀🚀 ~~ changePassword ~~ user`, user);

        const _id = user.id;

        const password = await bcrypt.hash(plainTextPassword, 10);

        await User.updateOne(
            { _id },
            {
                $set: { password }
            }
        );

        res.json({ status: "ok" });
    } catch (error) {
        console.log(error);
        res.json({ status: "error" });
    }
};

module.exports = {
    changePassword
};
