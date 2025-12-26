import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card, message } from "antd";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product.id.toString());
    localStorage.setItem("cart", JSON.stringify(cart));
    message.success("Đã thêm vào giỏ hàng");
  };

  if (!product) return null;

  return (
    <Card style={{ maxWidth: 800, margin: "auto" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: 300 }}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>💲 {product.price}</h3>

      <Button type="primary" onClick={addToCart}>
        Thêm vào giỏ hàng
      </Button>
    </Card>
  );
}

export default ProductDetail;
