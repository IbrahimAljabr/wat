const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).lean();

    if (!user) {
        return res.json({
            status: "error",
            error: "Invalid email or password"
        });
    }

    if (await bcrypt.compare(password, user.password)) {
        // the email, password combination is successful

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            JWT_SECRET
        );

        return res.json({ status: "ok", data: token });
    }

    res.json({ status: "error", error: "Invalid email or password" });
};

module.exports = {
    login
};
