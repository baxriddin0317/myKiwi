import React from 'react'
import './Header.scss';
import Logo from "../../Libry/Logo";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <div className="header">
            <div className="container">
                <div className="header__block">
                    <div className="header__head">
                        <Logo />
                        <span className="header__head-text">
                        Продай, найди, купи 
                        все что пожелаешь…
                        </span>
                    </div>

                    <ul className="header__list">
                        <li className="header__list-item">
                            <NavLink className="header__list-link" to="/">Объявления</NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink className="header__list-link" to="/">Магазины</NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink className="header__list-link" to="/">Для бизнеса</NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink className="header__list-link" to="/">Помощь</NavLink>
                        </li>
                    </ul>

                    <div className="header__box">
                        <span className="header__box-span">
                            Рус
                        </span>
                        <span className="header__box-line"></span>
                        <span className="header__box-span">
                            O`z
                        </span>
                    </div>

                    <div className="header__box">
                        <button className="header__box-btn">
                            Вход  
                        </button>
                        <span className="header__box-line"></span>
                        <button className="header__box-btn" onClick={() => navigate("/login")}>
                            Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
