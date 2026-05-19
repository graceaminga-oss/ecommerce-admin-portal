import { useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../hook/useProducts";

const API = "https://ecommerce-admin-portal-api.onrender.com/products";

export default function Products() {
  const [products, setProducts] = useProducts();
  const [search, setSearch] = useState("");

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
         Products Dashboard
      </h1>

      {/* SEARCH */}
      <input
        className="w-full p-3 mb-6 rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
          >

            {/* TOP COLOR BAR */}
            <div className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>

            <div className="p-5">

              {/* NAME */}
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 font-bold text-xl">
                {p.name}
              </h2>

              {/* PRICE */}
              <p className="text-green-600 font-semibold mt-1">
                ${p.price}
              </p>

              {/* ACTIONS */}
              <div className="flex justify-between items-center mt-5">

                {/* EDIT */}
                <Link
                  to={`/products/${p.id}`}
                  className="px-3 py-1 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  Edit
                </Link>

                {/* DELETE */}
                <button
                  onClick={() => handleDelete(p.id)}
                  className="px-3 py-1 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Delete
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}