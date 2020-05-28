const DB = require("node-json-db");

const schools = new DB.JsonDB(__dirname + "/schools.json", true, true);

module.exports = { schools };
