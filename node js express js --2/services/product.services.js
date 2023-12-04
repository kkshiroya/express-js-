const { userSchema } = require("../product");

const getuser = () => {
    return userSchema.find();
};

module.exports = { getuser };