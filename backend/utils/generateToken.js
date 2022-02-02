import { Jwt } from "jsonwebtoken";
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY);
};

module.exports = generateToken;