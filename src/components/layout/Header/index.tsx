import React, {useContext} from 'react';
import type { FC } from 'react';
import logo from "../../../logo.svg";
import s from './Header.module.scss';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ReactComponent as Logout} from './img/logout.svg';
import cn from 'classnames';
import {AppContext} from "../../App/context";

const Header: FC = () => {
    const {isAuth, setIsAuth} = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        if (isAuth && setIsAuth) {
            setIsAuth(false);
        }
        navigate(0);
    }

  return (
          <header className={s.header}>
              <div className="container">
                  <div className={s.wrapper}>
                     <img src={logo} className="App-logo" alt="logo" />
                      <nav className={s.linkMenu}>
                          <Link className={s.link} to="/">Главная</Link>
                          <Link className={s.link} to="/service">Наш продукт</Link>
                          {isAuth ? (
                              <Logout className={cn(s.logout, s.link)} onClick={handleLogout} />
                          ) : (
                            <Link className={s.link} to="/login">
                                Войти
                            </Link>
                          )}
                      </nav>
                  </div>
              </div>
      </header>
  );
};

export default Header;