import React from "react";
import { Image, Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";

const EmpTable = ({ data, handleDelete }) => {
  const columns = [
    {
      title: "Unique Id",
      dataIndex: "_id",
      sorter: (a, b) => a._id - b._id,
    },
    {
      title: "Image",
      dataIndex: "images",
      render: (images) => (
        <>
          {images.length > 0 ? (
            <Image width={50} src={images[0].url} />
          ) : (
            <Image width={50} src="" />
          )}
        </>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: "30%",
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email - b.email,
    },
    {
      title: "Mobile",
      dataIndex: "mobile_no",
    },
    {
      title: "Designation",
      dataIndex: "designation",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Course",
      dataIndex: "course",
    },
    {
      title: "Create date",
      dataIndex: "createdAt",
      sorter: (a, b) => a.createAt - b.createAt,
      // render: (createAt) => {
      //   const dateObject = new Date(createAt);
      //   const datePart = dateObject.toISOString().split("T")[0];
      //   return <>{datePart}</>;
      // },
    },
    {
      title: "operation",
      dataIndex: "email",
      render: (email) => (
        <>
          <a
            className="btn btn-sm text-center btn-warning w-100"
            href={`/dashboard/update-employee/${email}`}
          >
            Edit
          </a>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(email)}
          >
            <a className="btn btn-sm text-center btn-primary w-100 mt-1">
              Delete
            </a>
          </Popconfirm>
        </>
      ),
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      scroll={{ x: 1000 }}
    />
  );
};
export default EmpTable;
