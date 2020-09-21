import { Button, Result, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Row style={{ height: "100vh" }} justify="center" align="middle">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Link to="/">
              <Button type="primary">Back Home</Button>
            </Link>
          }
        />
      </Row>
    </>
  );
};

export default NotFound;
