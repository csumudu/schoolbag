import React, { useEffect, useState } from "react";
import SearchResults from "../components/searchResults/SearchResults";
import SearchFilterForm from "../components/searchFilterForm/SearchFilterForm";
import { useLazyQuery } from "@apollo/react-hooks";
import * as quries from "../../graphql/quries";
import { withRouter } from "react-router-dom";

const pageSize = 10;

const SchoolSearchPage = ({ match: { params: { isRefetch } = {} } }) => {
  const [pageNo, setPageNo] = useState(0);

  const [searchSchools, { data: { allSchools } = {}, refetch }] = useLazyQuery(
    quries.SEARCH_SCHOOLS
  );

  useEffect(() => {
    searchSchools({
      variables: {
        offset: pageNo * pageSize,
        pageSize: pageSize,
      },
    });
  }, [searchSchools, pageNo]);

  
  useEffect(() => {
    if (isRefetch && refetch) {
      refetch();
    }
  }, [refetch, isRefetch]);

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

export default withRouter(SchoolSearchPage);
