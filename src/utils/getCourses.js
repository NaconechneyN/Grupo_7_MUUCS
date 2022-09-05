const fs = require("fs");
const path = require("path");

const getCourses = () => {
    const dbJson = fs.readFileSync(
        path.join(__dirname, "../../data/coursesDataBase.json"),
        { encoding: "utf-8" }
    );
    return JSON.parse(dbJson);
};

module.exports = getCourses;