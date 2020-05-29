const { gql } = require("apollo-server");

const schoolsQuries = gql`
  type Query {
    allSchools(
      name: String
      address: String
      email: String
      offset: Int
      pageSize: Int
    ): PaginatedSchoolsRes
  }
`;

module.exports = schoolsQuries;
