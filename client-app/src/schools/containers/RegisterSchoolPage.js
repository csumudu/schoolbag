import React, { useEffect } from "react";
import { PageHeader } from "antd";
import { Card } from "antd";
import RegistreSchoolForm from "../components/RegistreSchoolForm/RegistreSchoolForm";
import "./RegisterSchoolPage.scss";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import * as quries from "../../graphql/quries";
import SearchResults from "../components/searchResults/SearchResults";

const pageSize = 2;

const RegisterSchoolPage = () => {
  const [register, { loading, data, error }] = useMutation(
    quries.REGISTER_SCHOOL
  );

  const [searchSchools, { data: { allSchools } = {} }] = useLazyQuery(
    quries.SEARCH_SCHOOLS,
    {
      fetchPolicy: "network-only",
    }
  );

  const load = () => {
    searchSchools({
      variables: {
        offset: 0,
        pageSize: pageSize,
      },
    });
  };

  useEffect(() => {
    load();
  }, [searchSchools, data]);

  const onSubmitHandler = (school) => {
    register({
      variables: {
        school,
      },
    });
  };

  return (
    <div className="RegisterSchoolPage">
      <PageHeader
        className="site-page-header"
        backIcon={false}
        title="Register School"
      />
      <div>
        <Card>
          <RegistreSchoolForm onSubmit={onSubmitHandler} />
        </Card>
      </div>
      <div style={{ paddingTop: 10 }}>
        <Card>
          <SearchResults data={allSchools} />
        </Card>
      </div>
    </div>
  );
};

export default RegisterSchoolPage;
