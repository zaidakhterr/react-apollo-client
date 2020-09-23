import { RightOutlined } from "@ant-design/icons";
import { useLazyQuery } from "@apollo/client";
import { PageHeader, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/books",
    name: "Books",
  },
];

const Books = () => {
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
        title="Books"
        subTitle="View / Add all Books here"
        breadcrumb={{
          routes,
          itemRender: (route) => {
            return (
              <Link key={route.path} to={route.path}>
                {route.name}
              </Link>
            );
          },
        }}
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
