import { useQuery } from "@apollo/client";
import { PageHeader, Space, Table } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { GET_AUTHORS } from "../graphql/queryGetAuthors";

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

  const { data, error, loading } = useQuery(GET_AUTHORS, {
    variables: {
      pageNo: 0,
    },
  });

  const authors = data?.authors?.list.map((author) => ({
    key: author.id,
    name: author.name,
    email: author.email,
  }));

  console.log(data, error, loading);

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="Authors"
        subTitle="View / Add all Authors here"
      />
      <Table
        rowSelection={{
          type: "radio",
          onChange: () => {},
          getCheckboxProps: (record) => ({
            name: record.name,
          }),
        }}
        dataSource={authors}
        columns={columns}
        pagination={false}
      />
    </>
  );
};

export default Authors;
