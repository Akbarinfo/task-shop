import { FaSearch } from "react-icons/fa";

type Props = {};

export default function HeaderSearch({}: Props) {
  return (
    <div className="header-search">
      <div className="container">
        <form className="header-search__form">
          <FaSearch className="header-search__icon" />

          <input
            type="text"
            className="header-search__input"
            placeholder="Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... "
          />
        </form>
      </div>
    </div>
  );
}
