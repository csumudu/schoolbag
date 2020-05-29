import React from "react";
import { Table, Tag, Space } from "antd";
const columns = [
  {
    title: "School Name",
    dataIndex: "name",
    width: 200,
    key: "name",
  },
  {
    title: "No of Students",
    width: 150,
    dataIndex: "noOfStudents",
    key: "noOfStudents",
  },
  {
    title: "Address",
    key: "address",
    render: (text, record) => (
      <>
        <div>{record.addressLineOne}</div>
        <div>{record.addressLineTwo}</div>
        <div>{record.addressLineThree}</div>
      </>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Action",
    width: 100,
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Edit </a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const SearchResults = ({ data, pageSize, onPaginationChange }) => {
  return (
    <div>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data && data.schools}
        pagination={
          pageSize
            ? {
                pageSize,
                total: data && data.noOfRecords,
                onChange: onPaginationChange,
              }
            : false
        }
      />
    </div>
  );
};

export default SearchResults;
