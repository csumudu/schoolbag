const { gql } = require("apollo-server");

const schoolsQuries = gql`
  type Query {
    allSchools: [School]
  }
`;

module.exports = schoolsQuries;
