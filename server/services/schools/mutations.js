const { gql } = require("apollo-server");

const schoolsMutations = gql`
  type Mutation {
    addSchool(school: SchoolParam!): SchoolResponse
  }
`;

module.exports = schoolsMutations;
