import {useRef, useState} from "react";
import { ArrowRightAlt } from '@mui/icons-material';
import React from 'react'
import Modal from '../Modal/Modal';
import Airplan from "../../Libry/Airplan";
import Dom from "../../Libry/Dom";
import Gaming from "../../Libry/Gaming";
import Lichni from "../../Libry/Lichni";
import Man from "../../Libry/Man";
import Remont from "../../Libry/Remont";
import Roboto from "../../Libry/Roboto";
import Sad from "../../Libry/Sad";
import Terminal from "../../Libry/Terminal";
import './Menu.scss'
import array from "../../Assets/Baza/LINKS.json";


function Menu() {
    const [ modal, setModal ] = useState(false);
    const [ newArr, setNewArr] = useState([]);

    const list = useRef();

    let position = 0;

    const handleClick = (direction) => {

        if(direction === "left"){
            if(position < 0){
                position += 135;
                list.current.childNodes.forEach(element => {
                    element.style = `transform: translateX(${position}px);`;
                });            
            }
        }
        if(direction === "right"){
            if(position <= 0){
                position -= 135;
                list.current.childNodes.forEach(element => {
                    element.style = `transform: translateX(${position}px);`;
                });
            }
        }
    }

    const menuClick = (menuType) => {
        setNewArr(array.filter(arr => arr.type === menuType));
        setModal(true);
    }

    return (
        <div className='menu'>
            <div className="container">
                <ArrowRightAlt className='arrow left' onClick={() => handleClick("left")} />
                
                <ul className="menu__list" ref={list}>
                        <li className="menu__item" onClick={() => menuClick("Автомобили")}>
                            <span className="menu__item-span">
                                <Airplan />
                            </span>
                            <span className="menu__item-text">
                                Автомобили
                            </span>
                        </li>
                        <li className="menu__item" onClick={() => menuClick("Недвижимость")} >
                            <span className="menu__item-span">
                                <Dom />
                            </span>
                            <span className="menu__item-text">
                            Недвижимость
                            </span>
                        </li>
                        <li className="menu__item" onClick={() => menuClick("Электроника")} >
                            <span className="menu__item-span">
                                <Terminal />
                            </span>
                            <span className="menu__item-text">
                            Электроника
                            </span>
                        </li>
                        <li className="menu__item" onClick={() => menuClick("Работа")} >
                            <span className="menu__item-span">
                                <Roboto />
                            </span>
                            <span className="menu__item-text">
                            Работа
                            </span>
                        </li>
                        <li className="menu__item" onClick={() => menuClick("Личные вещи")} >
                            <span className="menu__item-span">
                                <Lichni />
                            </span>
                            <span className="menu__item-text">
                            Личные вещи
                            </span>
                        </li>
                        <li className="menu__item" onClick={() => menuClick("Дом и Сад")} >
                            <span className="menu__item-span">
                                <Sad />
                            </span>
                            <span className="menu__item-text">
                            Дом и Сад
                            </span>
                        </li>
                        <li className="menu__item" onClick={() => menuClick("Стройка и ремонт")} >
                            <span className="menu__item-span">
                                <Remont />
                            </span>
                            <span className="menu__item-text">
                            Стройка и ремонт
                            </span>
                        </li>
                        <li className="menu__item" onClick={() => menuClick("Хобби и Спорт")} >
                            <span className="menu__item-span">
                                <Gaming />
                            </span>
                            <span className="menu__item-text">
                            Хобби и Спорт
                            </span>
                        </li>
                        <li className="menu__item" onClick={() => menuClick("Бизнес и услуги")} >
                            <span className="menu__item-span">
                                <Man />
                            </span>
                            <span className="menu__item-text">
                            Бизнес и услуги
                            </span>
                        </li>
                        <li className="menu__item" onClick={() => menuClick("Автомобили")} >
                            <span className="menu__item-span">
                                <Airplan />
                            </span>
                            <span className="menu__item-text">
                                Автомобили
                            </span>
                        </li>
                        <li className="menu__item" onClick={() => menuClick("Автомобили")} >
                            <span className="menu__item-span">
                                <Airplan />
                            </span>
                            <span className="menu__item-text">
                                Автомобили
                            </span>
                        </li>
                        <li className="menu__item" onClick={() => menuClick("Автомобили")} >
                            <span className="menu__item-span">
                                <Airplan />
                            </span>
                            <span className="menu__item-text">
                                Автомобили
                            </span>
                        </li>
                </ul>
                
                <ArrowRightAlt className='arrow right' onClick={() => handleClick("right")} />
            </div>
            {modal && <Modal newArr={newArr} setModal={setModal} />}
        </div>
    )
}

export default Menu
