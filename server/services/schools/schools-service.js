const db = require("../../data");

class SchoolsService {
  async getAllSchools(name, address, email, offset, pageSize) {
    const schools = db.schools.getData("/allSchools") || [];
    const filtered = schools
      .sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0))
      .filter((f) => {
        let flag = !name && !address && !email ? true : false;

        if (name)
          flag =
            flag ||
            String(f.name).toLowerCase().includes(String(name).toLowerCase());

        if (email && f.email)
          flag =
            flag ||
            String(f.email).toLowerCase().includes(String(email).toLowerCase());

        if (address)
          flag =
            flag ||
            (f.addressLineOne &&
              String(f.addressLineOne)
                .toLowerCase()
                .includes(String(address).toLowerCase())) ||
            (f.addressLineTwo &&
              String(f.addressLineTwo)
                .toLowerCase()
                .includes(String(address).toLowerCase())) ||
            (f.addressLineThree &&
              String(f.addressLineThree)
                .toLowerCase()
                .includes(String(address).toLowerCase()));

        return flag;
      })
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
