import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API = "https://ecommerce-admin-portal-api.onrender.com/products";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setPrice(data.price);
        setLoading(false);
      });
  }, [id]);

  const updatePrice = () => {
    fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: Number(price) }),
    })
      .then((res) => res.json())
      .then((updated) => setProduct(updated));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
        <p className="text-lg font-semibold animate-pulse text-gray-700">
          Loading product...
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-6 text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">

      {/* CARD */}
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* TOP BAR */}
        <div className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>

        <div className="p-6">

          {/* NAME */}
          <h1 className="text-3xl font-bold text-gray-800">
            {product.name}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-500 mt-3">
            {product.description}
          </p>

          {/* PRICE DISPLAY */}
          <div className="mt-5 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Current Price:
            </p>
            <p className="text-2xl font-bold text-green-600">
              ${product.price}
            </p>
          </div>

          {/* UPDATE SECTION */}
          <div className="mt-6">

            <label className="text-sm font-semibold text-gray-600">
              Update Price
            </label>

            <div className="flex gap-3 mt-2">

              <input
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <button
                onClick={updatePrice}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:opacity-90 transition"
              >
                Save
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}