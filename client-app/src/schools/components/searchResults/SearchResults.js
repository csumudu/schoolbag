import React from "react";
import { Table, Tag, Space } from "antd";
const columns = [
  {
    title: "Name",
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
    title: "Email",
    dataIndex: "email",
    key: "email",
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
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Edit </a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const SearchResults = ({ data }) => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default SearchResults;
