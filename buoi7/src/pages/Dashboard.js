import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <Button type="link">
        <Link to="/users">Users</Link>
      </Button>
      <Button type="link">
        <Link to="/products">Products</Link>
      </Button>
      <br />
      <Button danger onClick={logout}>Logout</Button>
    </div>
  );
}
