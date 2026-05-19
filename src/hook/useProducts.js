import { useEffect, useState } from "react";

const API = "https://ecommerce-admin-portal-api-2.onrender.com/products";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products, setProducts];
}