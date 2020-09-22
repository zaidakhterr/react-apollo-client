import { Button, Result, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Row justify="center" align="middle">
        <Result
          status="500"
          title="500"
          subTitle="Oops! Something went wrong!"
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

export default Error;
