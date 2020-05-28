const { gql } = require("apollo-server");

const schoolsTypes = gql`
  type School {
    id: String
    name: String
  }

  type SchoolResponse {
    success: Boolean
    message: String
  }

  input SchoolParam {
    name: String
  }
`;

module.exports = schoolsTypes;
