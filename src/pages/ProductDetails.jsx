import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API = "http://localhost:6001/products";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setPrice(data.price);
      });
  }, [id]);

  const updatePrice = () => {
    fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: Number(price) })
    })
      .then(res => res.json())
      .then(updated => setProduct(updated));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">{product.name}</h1>

      <input
        className="border p-2 mt-3"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button
        onClick={updatePrice}
        className="bg-green-600 text-white px-4 py-2 ml-2"
      >
        Update Price
      </button>
    </div>
  );
}