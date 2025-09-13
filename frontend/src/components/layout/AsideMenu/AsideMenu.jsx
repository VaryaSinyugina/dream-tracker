import { Link } from "react-router-dom";

import Icon from "../../ui/Icon/Icon";

import "./AsideMenu.scss";
import { useState } from "react";
import AuthModal from "../../modals/AuthModal/AuthModal";

export default function AsideMenu({isMenuOpen, onClose}) {
  const [isMenuLarge, setIsMenuLarge] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <aside
        className={`aside-menu ${isMenuLarge ? "aside-menu--large" : ""} ${isMenuOpen ? "open" : ""}`}
        onMouseEnter={() => setIsMenuLarge(true)}
        onMouseLeave={() => setIsMenuLarge(false)}
      >
        <button className="aside-menu__close" onClick={onClose}>
          <Icon name="x" width={24} height={24}/>
        </button>

        <div className="aside-menu__inner">
          <div className="aside-menu__top">
            <Link to="/">
              <p>logo</p>
            </Link>
          </div>

          <nav className="aside-menu__nav">
            <Link to="/" className="aside-menu__nav-link">
              <Icon name="compass" width={24} height={24} />
              <span className="aside-menu__nav-title">Главная</span>
            </Link>
            <Link to="/contacts" className="aside-menu__nav-link">
              <Icon name="info-circle" width={24} height={24} />
              <span className="aside-menu__nav-title">Контакты</span>
            </Link>
          </nav>

          <div className="aside-menu__bottom">
            <Link to="/profile" className="aside-menu__nav-link">
              <Icon name="user" width={24} height={24} />
              <span className="aside-menu__nav-title">Профиль</span>
            </Link>
            <button className="aside-menu__nav-link" onClick={() => setIsAuthOpen(true)}>
              <Icon name="log-in" width={24} height={24} />
              <span className="aside-menu__nav-title">Вход/Регистрация</span>
            </button>
          </div>
        </div>
      </aside>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)}/>
    </>
  );
}
