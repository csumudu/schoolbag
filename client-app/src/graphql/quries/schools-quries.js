import { gql } from "apollo-boost";

export const SEARCH_SCHOOLS = gql`
  query allSchools(
    $name: String
    $address: String
    $email: String
    $offset: Int
    $pageSize: Int
  ) {
    allSchools(
      name: $name
      address: $address
      email: $email
      offset: $offset
      pageSize: $pageSize
    ) {
      noOfRecords
      offset
      pageSize
      schools {
        id
        name
        noOfStudents
        email
        addressLineOne
        addressLineTwo
        addressLineThree
      }
    }
  }
`;

export const REGISTER_SCHOOL = gql`
  mutation register($school: SchoolParam!) {
    addSchool(school: $school) {
      success
    }
  }
`;
