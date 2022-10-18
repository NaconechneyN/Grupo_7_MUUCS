const fs = require("fs");
const path = require("path");

const setUsers = (courses) => {
    const dbJson = fs.writeFileSync(
        path.join(__dirname, "../../data/users.json"),
        courses
    );
    return;
};

module.exports = setUsers;