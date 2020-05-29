const resolvers = {
  Query: {
    allSchools(
      _,
      { name, address, email, offset = 0, pageSize = 10 },
      { dataSources }
    ) {
      return dataSources.schoolsService.getAllSchools(
        name,
        address,
        email,
        offset,
        pageSize
      );
    },
  },
  Mutation: {
    addSchool(_, { school }, { dataSources }) {
      return dataSources.schoolsService.addSchool(school);
    },
  },
};

module.exports = resolvers;
