import { PageHeader } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const Books = () => {
  const history = useHistory();
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="Books"
        subTitle="View / Add all books here"
      />
    </>
  );
};

export default Books;
