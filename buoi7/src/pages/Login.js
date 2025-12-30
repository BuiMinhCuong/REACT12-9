import { Button, Card, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "123456") {
      localStorage.setItem("isLogin", "true");
      navigate("/dashboard");
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <Card title="Login" style={{ width: 300, margin: "100px auto" }}>
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input.Password
        placeholder="Password"
        style={{ marginTop: 10 }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="primary"
        block
        style={{ marginTop: 15 }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Card>
  );
}
