import Hero from "./Hero/Hero";
import Product from "./Product/Product";

type Props = {};

export default function Main({}: Props) {
  return (
    <main>
      <Hero />
      <Product />
    </main>
  );
}
