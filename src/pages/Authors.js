import { useLazyQuery } from "@apollo/client";
import { PageHeader, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GET_AUTHORS } from "../graphql/queryGetAuthors";
import Error from "../components/Error";
import Pagination from "../components/Pagination";

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
          <Pagination pageNo={pageNo} setPageNo={setPageNo} hasMore={data?.authors?.hasMore} />
        </>
      )}
    </>
  );
};

export default Authors;
