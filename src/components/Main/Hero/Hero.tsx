import { Link } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";
import hero1 from "../../../assets/images/hero/hero1.png";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__imgbox">
            <img src={hero1} alt="hero-img" />
          </div>
          <div className="hero__box"> 
            <h2 className="hero__title">
              Универсальное решение для ваших нужд в одежде
            </h2>
            <p className="hero__text">
              Все, что вам нужно, чтобы найти идеальный предмет одежды, есть в
              Lode X. Мы предлагаем одежду ведущих брендов и редактирование
              изображений на ней.
            </p>
            <Link to={"/"} className="hero__link">
              читать далее <LuMoveRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
