import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <div>
      <header style={{ display: "flex", gap: 20 }}>
        <h3>Dashboard</h3>
        <button>Quản lý sản phẩm</button>
        <button>Quản lý users</button>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <hr />


      <h4>Danh sách sản phẩm</h4>
      <ul>
        <li>Sản phẩm </li>

      </ul>

      <h4>Danh sách users</h4>
      <ul>
        <li>User </li>

      </ul>
    </div>
  );
}

export default Dashboard;
