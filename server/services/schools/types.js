const { gql } = require("apollo-server");

const schoolsTypes = gql`
  type PaginatedSchoolsRes {
    noOfRecords: Int
    offset: Int
    pageSize: Int
    schools: [School]
  }

  type School {
    id: String
    name: String
    noOfStudents: Int
    email: String
    addressLineOne: String
    addressLineTwo: String
    addressLineThree: String
  }

  type SchoolResponse {
    success: Boolean
    message: String
  }

  input SchoolParam {
    name: String
    noOfStudents: Int
    email: String
    addressLineOne: String
    addressLineTwo: String
    addressLineThree: String
  }
`;

module.exports = schoolsTypes;
