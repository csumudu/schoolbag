import React, { useEffect, useState } from "react";
import SearchResults from "../components/searchResults/SearchResults";
import SearchFilterForm from "../components/searchFilterForm/SearchFilterForm";
import { useLazyQuery } from "@apollo/react-hooks";
import * as quries from "../../graphql/quries";
import { withRouter } from "react-router-dom";
import { PageHeader } from "antd";

const pageSize = 10;

const SchoolSearchPage = ({ match: { params: { isRefetch } = {} } }) => {
  const [pageNo, setPageNo] = useState(0);
  const [filters, setFilters] = useState({});

  const [searchSchools, { data: { allSchools } = {}, refetch }] = useLazyQuery(
    quries.SEARCH_SCHOOLS
  );

  useEffect(() => {
    searchSchools({
      variables: {
        ...filters,
        offset: pageNo * pageSize,
        pageSize: pageSize,
      },
    });
  }, [searchSchools, pageNo, filters]);

  useEffect(() => {
    if (isRefetch && refetch) {
      refetch();
    }
  }, [refetch, isRefetch]);

  const paginationChangeHandler = (e) => {
    setPageNo(e - 1);
  };

  const filterChangeHandler = (f) => {
    setFilters(f);
  };

  return (
    <div>
      <PageHeader
        className="site-page-header"
        backIcon={false}
        title="All Registered Schools"
      />
      <div style={{ paddingBottom: 20, paddingTop: 5 }}>
        <SearchFilterForm onFilterChanged={filterChangeHandler} />
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
