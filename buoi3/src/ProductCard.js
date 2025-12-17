function ProductCard({ name, price, description,image }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 8 }}>
      <h2>{name}</h2>
      <img src={image}
        alt={name}/>
      <p>Giá: {price} VND</p>
      <p>ảnh: {} </p>

      {description && <small>{description}</small>}
    </div>
  );
}

export default ProductCard;
