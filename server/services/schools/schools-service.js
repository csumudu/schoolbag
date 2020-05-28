const db = require("../../data");

class SchoolsService {
  async getAllSchools(offset, pageSize) {
    const schools = db.schools.getData("/allSchools") || [];
    const filtered = schools
      .sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0))
      .filter((s, i) => i >= offset && i < offset + pageSize);

    return {
      noOfRecords: schools.length,
      offset,
      pageSize,
      schools: filtered,
    };
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
