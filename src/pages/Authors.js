import { PageHeader } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const Authors = () => {
  const history = useHistory();
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="Authors"
        subTitle="View / Add all Authors here"
      />
    </>
  );
};

export default Authors;
