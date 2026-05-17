import { useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../hook/useProducts";

export default function Products() {
  const [products, setProducts] = useProducts();
  const [search, setSearch] = useState("");

  const API = "http://localhost:6001/products";

  // DELETE
  const handleDelete = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE",
    }).then(() => {
      setProducts(products.filter((p) => p.id !== id));
    });
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <div className="p-6 bg-gray-50 min-h-screen">

    {/* SEARCH */}
    <input
      className="border p-3 w-full mb-6 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Search products..."
      onChange={(e) => setSearch(e.target.value)}
    />

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-6">

      {filtered.map((p) => (
        <div
          key={p.id}
          className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
        >

          {/* PRODUCT NAME */}
          <h2 className="text-lg font-bold text-gray-800">
            {p.name}
          </h2>

          {/* PRICE */}
          <p className="text-gray-600 mt-1">
            ${p.price}
          </p>

          {/* ACTIONS */}
          <div className="flex justify-between items-center mt-4">

            <Link
              to={`/products/${p.id}`}
              className="text-blue-600 text-sm hover:underline"
            >
              Edit
            </Link>

            <button
              className="text-red-500 text-sm hover:underline"
              onClick={() => handleDelete(p.id)}
            >
              Delete
            </button>

          </div>

        </div>
      ))}

    </div>

    </div>
    )};