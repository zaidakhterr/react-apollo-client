import { useQuery } from "@apollo/client";
import { Button, PageHeader, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_AUTHORS } from "../graphql/queryGetAuthors";
import Error from "../components/Error";
import Pagination from "../components/Pagination";
import { PlusOutlined } from "@ant-design/icons";
import AddAuthorModal from "../components/AddAuthorModal";

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

const routes = [
  {
    path: "/",
    breadcrumbName: "Home",
  },
  {
    path: "/authors",
    breadcrumbName: "Authors",
  },
];

const Authors = () => {
  const [pageNo, setPageNo] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { data, error, loading, fetchMore } = useQuery(GET_AUTHORS, {
    variables: {
      pageNo,
    },
  });

  useEffect(() => {
    console.log(pageNo);
    fetchMore({
      variables: {
        pageNo,
      },
    });
  }, [pageNo, fetchMore]);

  const authors = data?.authors?.list.map((author) => ({
    key: author.id,
    name: author.name,
    email: author.email,
  }));

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Authors"
        subTitle="View / Add all Authors here"
        breadcrumb={{
          routes,
          itemRender: (route) => {
            return <Link to={route.path}>{route.breadcrumbName}</Link>;
          },
        }}
        extra={[
          <Button
            disabled={!!error}
            type="primary"
            key="new"
            icon={<PlusOutlined />}
            onClick={() => {
              setIsFilterOpen(true);
            }}
          >
            New
          </Button>,
        ]}
      />
      {error ? (
        <Error />
      ) : (
        <>
          <Table loading={loading} dataSource={authors} columns={columns} pagination={false} />
          <Pagination pageNo={pageNo} setPageNo={setPageNo} hasMore={data?.authors?.hasMore} />
          <AddAuthorModal open={isFilterOpen} setOpen={setIsFilterOpen} />
        </>
      )}
    </>
  );
};

export default Authors;
