import { useLazyQuery, useQuery } from "@apollo/client";
import { Button, Col, PageHeader, Row, Table, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GET_AUTHORS } from "../graphql/queryGetAuthors";
import Error from "../components/Error";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

const Authors = () => {
  const history = useHistory();

  const [pageNo, setPageNo] = useState(1);

  const [getAuthors, { data, error, loading }] = useLazyQuery(GET_AUTHORS);

  useEffect(() => {
    getAuthors({
      variables: {
        pageNo,
      },
    });
  }, [pageNo, getAuthors]);

  const authors = data?.authors?.list.map((author) => ({
    key: author.id,
    name: author.name,
    email: author.email,
  }));

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="Authors"
        subTitle="View / Add all Authors here"
      />
      {error ? (
        <Error />
      ) : (
        <>
          <Table
            loading={loading}
            rowSelection={{
              type: "radio",
              onChange: () => {},
              getRaProps: (record) => ({
                name: record.name,
              }),
            }}
            dataSource={authors}
            columns={columns}
            pagination={false}
          />
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
                disabled={!data?.authors?.hasMore}
                type="text"
                icon={<RightOutlined />}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Authors;
