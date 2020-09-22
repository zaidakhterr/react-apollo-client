import { useLazyQuery } from "@apollo/client";
import { PageHeader, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Error from "../components/Error";
import Pagination from "../components/Pagination";
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

  const [pageNo, setPageNo] = useState(1);

  const [getBooks, { data, error, loading }] = useLazyQuery(GET_BOOKS, {
    variables: {
      pageNo,
    },
  });

  useEffect(() => {
    getBooks({
      variables: {
        pageNo,
      },
    });
  }, [pageNo, getBooks]);

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
      {error ? (
        <Error />
      ) : (
        <>
          <Table
            loading={loading}
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
          <Pagination pageNo={pageNo} setPageNo={setPageNo} hasMore={data?.books?.hasMore} />
        </>
      )}
    </>
  );
};

export default Books;
