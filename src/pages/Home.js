import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Row gutter={16} justify="center" style={{ height: "100vh" }} align="middle">
        <Col xs={8} md={6} lg={4} xl={3}>
          <Link to="/authors">
            <Button block size="large" shape="round">
              Authors
            </Button>
          </Link>
        </Col>
        <Col xs={8} md={6} lg={4} xl={3}>
          <Link to="/books">
            <Button block size="large" shape="round">
              Books
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Home;
