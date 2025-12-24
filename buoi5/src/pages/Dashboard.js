import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          <Button color="inherit">Quản lý sản phẩm</Button>
          <Button color="inherit">Quản lý users</Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

 
      <Box p={3}>
        <Typography variant="h6">Danh sách sản phẩm </Typography>
        <ul>
          <li>Sản phẩm </li>
         
        </ul>

        <Typography variant="h6" mt={2}>
          Danh sách users 
        </Typography>
        <ul>
          <li>User</li>
      
        </ul>
      </Box>
    </>
  );
}

export default Dashboard;
