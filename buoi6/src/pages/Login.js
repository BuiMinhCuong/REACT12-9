import { Button, Card, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { email, password } = values;

    if (email === "user@gmail.com" && password === "password123") {
      localStorage.setItem(
        "user",
        JSON.stringify({ email })
      );
      message.success("Đăng nhập thành công!");
      navigate("/");
    } else {
      message.error("Sai email hoặc mật khẩu");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      <Card title="Login" style={{ width: 350 }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
