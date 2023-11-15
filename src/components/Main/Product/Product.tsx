import Hero from "../Hero/Hero";
import ProductHeader from "./ProductHeader/ProductHeader";
import ProductItem from "./ProductItem/ProductItem";

type Props = {};

export default function Product({}: Props) {
  return (
    <>
      <Hero />
      <section className="product">
        <div className="container">
          <ProductHeader />

          <p className="product__header-slug">Последние поступления</p>

          <div className="product__titlebox">
            <h2 className="product__title">Новые рисунки</h2>
            <div className="product__selectbox">
              <p>Сортировать:</p>

              <select name="type" id="type" className="product__select">
                <option value="volvo">Цена повозрастанию </option>
                <option value="volvo">Цена повозрастанию </option>
                <option value="volvo">Цена повозрастанию </option>
              </select>
            </div>
          </div>

          <ProductItem />
        </div>
      </section>
    </>
  );
}
