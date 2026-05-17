import { render, screen } from "@testing-library/react";
import AddProduct from "../pages/AddProduct";
import "@testing-library/jest-dom";

test("renders add product form", () => {
  render(<AddProduct />);

  expect(
    screen.getByPlaceholderText(/Name/i)
  ).toBeInTheDocument();

  expect(
    screen.getByText(/Add Product/i)
  ).toBeInTheDocument();
});