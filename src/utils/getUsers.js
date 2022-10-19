const fs = require("fs");
const path = require("path");

const getUsers = () => {
    const dbJson = fs.readFileSync(
        path.join(__dirname, "../../data/users.json"),
        { encoding: "utf-8" }
    );
    return JSON.parse(dbJson);
};

module.exports = getUsers;