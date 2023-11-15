import { Route, Routes } from "react-router-dom";
import ProductItem from "../pages/ProductItem/ProductItem";
import Product from "../components/Main/Product/Product";

type Props = {};

export default function Routers({}: Props) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductItem />} />
      </Routes>
    </main>
  );
}
