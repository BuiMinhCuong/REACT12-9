import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data));
  }, []);

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
      {products.map(p => (
        <Card
          key={p.id}
          cover={<img alt={p.title} src={p.image} height={200} />}
        >
          <h4>{p.title}</h4>
          <p>${p.price}</p>
          <p>{p.category}</p>
          <Link to={`/products/${p.id}`}>Detail</Link>
          <Button danger block onClick={() => deleteProduct(p.id)}>
            Delete
          </Button>
        </Card>
      ))}
    </div>
  );
}
