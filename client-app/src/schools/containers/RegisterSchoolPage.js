import React, { useEffect } from "react";
import { PageHeader, Button } from "antd";
import { Card } from "antd";
import RegistreSchoolForm from "../components/RegistreSchoolForm/RegistreSchoolForm";
import "./RegisterSchoolPage.scss";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import * as quries from "../../graphql/quries";
import SearchResults from "../components/searchResults/SearchResults";
import { useNotification } from "../../shared/hooks/useNotification";

const pageSize = 5;

const RegisterSchoolPage = ({ history }) => {
  const { success, error } = useNotification();

  const [register, { loading, data, error: registrationError }] = useMutation(
    quries.REGISTER_SCHOOL
  );

  const { data: { allSchools } = {}, refetch } = useQuery(
    quries.SEARCH_SCHOOLS,
    {
      variables: {
        offset: 0,
        pageSize: 2,
      },
    }
  );

  useEffect(() => {
    if (data) {
      refetch();
      success("Success", "New School registration was successfull");
    }
    if (registrationError) {
      error("Registration Error", "New School registration was unsuccessfull");
    }
  }, [data, registrationError]);

  const onSubmitHandler = (school) => {
    register({
      variables: {
        school,
      },
    }).catch((e) => e);
  };

  const viewAllHandler = () => {
    history.push("/schools/search/all");
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
          <RegistreSchoolForm reset={data} onSubmit={onSubmitHandler} />
        </Card>
      </div>
      <div style={{ paddingTop: 10 }}>
        <Card>
          <h3 style={{ paddingBottom: 10 }}>Recently Added Schools</h3>
          <SearchResults data={allSchools} />
          <div className="btn-con">
            <Button type="link" onClick={viewAllHandler}>
              View all
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default withRouter(RegisterSchoolPage);
