import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ pageNo, setPageNo, hasMore = false }) => {
  return (
    <>
      <Row justify="end" align="middle" gutter={16} style={{ padding: 8 }}>
        <Col>
          <Button
            onClick={() => {
              setPageNo((p) => p - 1);
            }}
            disabled={pageNo === 1}
            type="text"
            icon={<LeftOutlined />}
          />
        </Col>
        <Col>
          <Typography.Text>{pageNo}</Typography.Text>
        </Col>
        <Col>
          <Button
            onClick={() => {
              setPageNo((p) => p + 1);
            }}
            disabled={!hasMore}
            type="text"
            icon={<RightOutlined />}
          />
        </Col>
      </Row>
    </>
  );
};

Pagination.propTypes = {
  hasMore: PropTypes.bool,
  pageNo: PropTypes.number.isRequired,
  setPageNo: PropTypes.func.isRequired,
};

export default Pagination;
