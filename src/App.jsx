import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import useProducts from "./hook/useProducts";

export default function App() {
  const { products } = useProducts();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}