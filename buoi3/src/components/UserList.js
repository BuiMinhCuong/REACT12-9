import { useEffect, useState } from "react";
import axios from "axios";
import { Spin, Alert, Card, List } from "antd";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Không thể tải danh sách người dùng");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="center">
        <Spin size="large" />
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="Lỗi"
        description={error}
        type="error"
        showIcon
      />
    );
  }

  return (
    <Card title="Danh sách người dùng" className="container">
      <List
        dataSource={users}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              title={user.name}
              description={user.email}
            />
            <p>{user.address.city}</p>
            <p>{user.phone}</p>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default UserList;
