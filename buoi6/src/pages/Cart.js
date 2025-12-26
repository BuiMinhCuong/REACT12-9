import { useEffect, useState } from "react";
import axios from "axios";
import { List, Card } from "antd";

function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    Promise.all(
      cart.map((id) =>
        axios.get(`https://fakestoreapi.com/products/${id}`)
      )
    ).then((res) => {
      setProducts(res.map((item) => item.data));
    });
  }, []);

  const total = products.reduce((sum, p) => sum + p.price, 0);

  return (
    <Card title="Giỏ hàng">
      <List
        dataSource={products}
        renderItem={(item) => (
          <List.Item>
            {item.title} - 💲{item.price}
          </List.Item>
        )}
      />
      <h3>Tổng tiền: 💲{total}</h3>
    </Card>
  );
}

export default Cart;
