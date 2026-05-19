import { useState } from "react";

const API = "https://ecommerce-admin-portal-api.onrender.com/products";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-3">

      <input
        className="border p-2 w-full"
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        className="border p-2 w-full"
        placeholder="Description"
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <input
        className="border p-2 w-full"
        placeholder="Price"
        type="number"
        onChange={(e) =>
          setForm({ ...form, price: e.target.value })
        }
      />

      <button className="bg-black text-white px-4 py-2">
        Add Product
      </button>

    </form>
  );
}