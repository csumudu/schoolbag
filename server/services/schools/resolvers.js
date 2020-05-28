const resolvers = {
  Query: {
    allSchools(_, __, { dataSources }) {
      return dataSources.schoolsService.getAllSchools();
    },
  },
  Mutation: {
    addSchool(_, { school }, { dataSources }) {
      return dataSources.schoolsService.addSchool(school);
    },
  },
};

module.exports = resolvers;
