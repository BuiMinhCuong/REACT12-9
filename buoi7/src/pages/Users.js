import { Table, Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data));
  }, []);

  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Website", dataIndex: "website" },
    {
      title: "Action",
      render: (_, record) => (
        <>
          <Link to={`/users/${record.id}`}>Detail</Link>
          <Button
            danger
            size="small"
            style={{ marginLeft: 10 }}
            onClick={() => deleteUser(record.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return <Table rowKey="id" columns={columns} dataSource={users} />;
}
