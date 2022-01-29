import React, { useState } from 'react';
import "../Product/Product.scss"
import Data from "../../Assets/Baza/MOCK_DATA.json";
import { KeyboardArrowDownSharp } from '@mui/icons-material';


function Latest() {
    const [num, setNum] = useState(4);
    const [products, setProducts] = useState(Data.filter((d) => d.type === "korildi"));
    
    const handleSpanClick = (evt) => {
        const elSpanAll = document.querySelectorAll(".product__head-span");
        
        elSpanAll.forEach((span) => span.classList.remove("active"));

        evt.currentTarget.classList.add("active");

        setProducts(Data.filter((d) => d.type === evt.currentTarget.id));
    }

  return (
    <div className='product container'>
            <div className="product__head">
                <span className='product__head-span active' onClick={handleSpanClick} id="korildi">Просмотренные</span>
                <span className='product__head-span'  onClick={handleSpanClick} id="tanlov">Выбор редакции</span>
                <span className='product__head-span'  onClick={handleSpanClick} id="skitka">Сниженные цены</span>
            </div>

            <ul className="product__list">
                {products.slice(0, num).map(d => (
                    <li className="product__list-item" key={Math.random()*2000}>
                        <img src={d.imgUrl} width={262} height={190} alt="" />
                        <p>{d.last_name}</p>
                        <div className="product__list-item-box">
                            <span>{d.data}</span>
                            <b>{d.money}</b>
                        </div>
                    </li>
                ))}
            </ul>

            <button className='product__btn' onClick={() => {
                if(num < Data.length){
                    setNum(4 + num);
                    setProducts(Data.slice(0, num));
                }
            }}>
            Покозать еще
            <KeyboardArrowDownSharp />
            </button>
    </div>
  );
}

export default Latest;
