import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Spin } from "antd";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spin size="large" />;

  return (
    <Row gutter={[16, 16]}>
      {products.map((item) => (
        <Col span={6} key={item.id}>
          <ProductCard product={item} />
        </Col>
      ))}
    </Row>
  );
}

export default Home;
