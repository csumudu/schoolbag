const db = require("../../data");

class SchoolsService {
  async getAllSchools() {
    const schools = db.schools.getData("/allSchools") || [];
    return schools;
  }

  async addSchool(school) {
    const schools = db.schools.push(
      "/allSchools[]",
      { ...school, id: Date.now().toString() },
      true
    );
    return {
      success: true,
    };
  }
}
module.exports = SchoolsService;
