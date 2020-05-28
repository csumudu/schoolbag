import React, { useEffect, useState } from "react";
import SearchResults from "../components/searchResults/SearchResults";
import SearchFilterForm from "../components/searchFilterForm/SearchFilterForm";
import { useLazyQuery } from "@apollo/react-hooks";
import * as quries from "../../graphql/quries";

const pageSize = 2;

const SchoolSearchPage = () => {
  const [pageNo, setPageNo] = useState(0);

  const [searchSchools, { data: { allSchools } = {} }] = useLazyQuery(
    quries.SEARCH_SCHOOLS
  );

  useEffect(() => {
    searchSchools({
      variables: {
        offset: 0,
        pageSize: pageSize,
      },
    });
  }, [searchSchools, pageNo]);

  const paginationChangeHandler = (e) => {
    setPageNo(e - 1);
  };

  return (
    <div>
      <div>
        <SearchFilterForm />
      </div>
      <div>
        <SearchResults
          data={allSchools}
          pageSize={pageSize}
          onPaginationChange={paginationChangeHandler}
        />
      </div>
    </div>
  );
};

export default SchoolSearchPage;
