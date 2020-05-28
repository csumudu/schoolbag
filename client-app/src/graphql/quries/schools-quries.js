import { gql } from "apollo-boost";

export const SEARCH_SCHOOLS = gql`
  query allSchools {
    allSchools {
      id
      name
    }
  }
`;
