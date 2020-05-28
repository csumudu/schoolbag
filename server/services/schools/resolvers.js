const resolvers = {
  Query: {
    allSchools(_, { offset = 0, pageSize = 10 }, { dataSources }) {
      return dataSources.schoolsService.getAllSchools(offset, pageSize);
    },
  },
  Mutation: {
    addSchool(_, { school }, { dataSources }) {
      return dataSources.schoolsService.addSchool(school);
    },
  },
};

module.exports = resolvers;
