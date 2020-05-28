import React, { useEffect } from "react";
import SearchResults from "../components/searchResults/SearchResults";
import SearchFilterForm from "../components/searchFilterForm/SearchFilterForm";
import { useLazyQuery } from "@apollo/react-hooks";
import * as quries from "../../graphql/quries";

const SchoolSearchPage = () => {
  const [searchSchools, { data: { allSchools } = {} }] = useLazyQuery(
    quries.SEARCH_SCHOOLS
  );

  useEffect(() => {
    searchSchools();
  }, [searchSchools]);

  return (
    <div>
      <div>
        <SearchFilterForm />
      </div>
      <div>
        <SearchResults data={allSchools} />
      </div>
    </div>
  );
};

export default SchoolSearchPage;
