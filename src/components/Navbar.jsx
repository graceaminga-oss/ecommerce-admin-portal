import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      
      <h1 className="font-bold text-lg"> Admin Panel</h1>

      <div className="flex gap-6 text-sm">
        <Link className="hover:text-gray-300" to="/">Dashboard</Link>
        <Link className="hover:text-gray-300" to="/products">Products</Link>
        <Link className="hover:text-gray-300" to="/add">Add Product</Link>
      </div>

    </nav>
  );
}
