const { gql } = require("apollo-server");

const schoolsQuries = gql`
  type Query {
    allSchools(offset: Int, pageSize: Int): PaginatedSchoolsRes
  }
`;

module.exports = schoolsQuries;
