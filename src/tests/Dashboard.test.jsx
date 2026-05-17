import { render, screen } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
import "@testing-library/jest-dom";

test("renders dashboard heading", () => {
  render(<Dashboard />);

  expect(
    screen.getByText(/Admin Portal/i)
  ).toBeInTheDocument();
});