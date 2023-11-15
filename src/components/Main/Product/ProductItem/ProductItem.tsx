import { useContext } from "react";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { HeartShop } from "../../../../App";
import { HeartIcons } from "../../../../utils/icons";
import productMenList from "../../../../database/productMenList.json";

type Props = {};

export default function ProductItem({}: Props) {
  const context = useContext(HeartShop);

  const likeHandler = async (id: number) => {
    if (context.heartShop.includes(id)) {
      const arr = [];
      for (let index = 0; index < context.heartShop.length; index++) {
        if (context.heartShop[index] != id) {
          arr.push(context.heartShop[index]);
        }
      }
      context.setHeartShop(arr);
    } else {
      context.setHeartShop([...context.heartShop, id]);
    }
  };

  return (
    <ul className="product__list">
      {productMenList.map((product, key) => (
        <li key={key + 3} className="product__item">
          <div className="product__imgbox">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product__wrapper">
            <div className="product__item-box">
              <h4 className="product__item-name">{product.name}</h4>
              <p className="product__item-price">
                {product.price}
                <span>сум</span>
              </p>
            </div>
            <div className="product__bottombox">
              <div className="product__btnbox">
                <button onClick={() => likeHandler(product.id)}>
                  <HeartIcons
                    text={`product__icon ${
                      context.heartShop.includes(product.id) &&
                      "product__icon-active"
                    }`}
                  />
                </button>
                <button>
                  <SlBasket />
                </button>
              </div>
              <Link to={`/product/${product.id}`} className="product__btn">
                Подробнее
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
