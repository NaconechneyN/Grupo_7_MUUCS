const fs = require("fs");
const path = require("path");

const setCourses = (courses) => {
    const dbJson = fs.writeFileSync(
        path.join(__dirname, "../../data/coursesDataBase.json"),
        courses
    );
    return;
};

module.exports = setCourses;