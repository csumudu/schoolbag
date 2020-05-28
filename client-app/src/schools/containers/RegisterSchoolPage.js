import React from "react";
import { PageHeader } from "antd";
import { Card } from "antd";
import RegistreSchoolForm from "../components/RegistreSchoolForm/RegistreSchoolForm";
import "./RegisterSchoolPage.scss";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import * as quries from "../../graphql/quries";

const RegisterSchoolPage = () => {
  const [register, { loading, data, error }] = useMutation(
    quries.REGISTER_SCHOOL
  );

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
    </div>
  );
};

export default RegisterSchoolPage;
