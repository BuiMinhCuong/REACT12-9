import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      cover={
        <img
          alt={product.title}
          src={product.image}
          style={{ height: 200, objectFit: "contain" }}
        />
      }
    >
      <h3>{product.title}</h3>
      <p>💲 {product.price}</p>
      <Button onClick={() => navigate(`/product/${product.id}`)}>
        Xem chi tiết
      </Button>
    </Card>
  );
}

export default ProductCard;
