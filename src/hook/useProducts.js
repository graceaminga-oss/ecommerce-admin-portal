import { useEffect, useState } from "react";

const API = "http://localhost:6001/products";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products, setProducts];
}