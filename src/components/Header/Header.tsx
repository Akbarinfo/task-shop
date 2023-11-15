import navbarList from "../../database/navbar.json";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/header/logo.png";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import { HeartIcons, UserIcons } from "../../utils/icons";
import { HeartShop } from "../../App";
import { useContext } from "react";

type Props = {};

export default function Header({}: Props) {
  const path = useLocation();
  const context = useContext(HeartShop);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to={"/"} className="header__logo">
            <img src={logo} alt="logo" />
          </Link>
          <nav className="header__nav">
            <ul className="header__list">
              {navbarList.map((list, key) => (
                <li key={key + 1} className="header__item">
                  <Link
                    className={`header__link ${
                      path.pathname == list.link && "header__link-active"
                    }`}
                    to={list.link}
                  >
                    {list.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__box">
            <Link to={"/"} className="header__heart">
              <HeartIcons text="header__icon" />
              <span>{context.heartShop.length}</span>
            </Link>
            <Link to={"/"} className="header__heart">
              <UserIcons />
            </Link>

            <Link to={"/"} className="header__contact">
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <HeaderSearch />
    </header>
  );
}
