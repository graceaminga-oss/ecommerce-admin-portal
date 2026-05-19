# React + Vite

Ecommerce Admin Portal

About;
This is a simple admin dashboard built with React. It helps manage products by letting you view, search, update, and delete them. The data comes from a backend API.

What you can do;
See all products when the page loads
Search products by name
View product details
Update product price
Delete products
Uses a custom hook to handle product data

Hooks I used; 
useState → to manage things like products and search input
useEffect → to load data from the backend when the page opens
Custom Hook (useProducts) → to handle fetching products in one place instead of repeating code

CRUD features;
Create → add a product (if enabled in form)
Read → fetch and display products from API
Update → edit product price
Delete → remove products from the list

Pages / Routing;
The app moves between pages using React Router:
Home / Dashboard
Products list page
Product details page (/products/:id)

Tools used;
React
React Router
Tailwind CSS
JSON Server (API)

The app connects to this API:
https://ecommerce-admin-portal-api.onrender.com/products

Custom Hook;
I used a custom hook (useProducts) to fetch products and keep the code clean and reusable across components.