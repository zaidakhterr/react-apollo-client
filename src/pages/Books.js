import { useQuery } from "@apollo/client";
import { PageHeader, Table } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { GET_BOOKS } from "../graphql/queryGetBooks";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
  },
];

const Books = () => {
  const history = useHistory();

  const { data, error, loading } = useQuery(GET_BOOKS, {
    variables: {
      pageNo: 0,
    },
  });

  const books = data?.books?.list.map((book) => ({
    key: book.id,
    title: book.title,
    author: book.author.name,
  }));

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="Books"
        subTitle="View / Add all Books here"
      />
      <Table
        rowSelection={{
          type: "radio",
          onChange: () => {},
          getCheckboxProps: (record) => ({
            name: record.name,
          }),
        }}
        dataSource={books}
        columns={columns}
        pagination={false}
      />
    </>
  );
};

export default Books;
