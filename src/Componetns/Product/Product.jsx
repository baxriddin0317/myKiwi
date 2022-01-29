import React, { useState } from 'react';
import "./Product.scss";
import Data from "../../Assets/Baza/MOCK_DATA.json";
import { KeyboardArrowDownSharp } from '@mui/icons-material';

function Product() {
    const [span, setSpan] = useState(true);
    const [num, setNum] = useState(16);
    const [products, setProducts] = useState(Data.slice(0, 16).filter((d) => d.type === "yangi"));
    
    const handleSpanClick = (turi) => {
        turi === "yangi" ? setSpan(true) : setSpan(false); 

        setProducts(Data.filter(d => d.type === turi));
    }

  return (
    <div className='product'>
            <div className="product__head">
                <span className={span ? "active" : ""} onClick={() => handleSpanClick("yangi")}>Новые объявления</span>
                <span className={!span ? "active" : ""}  onClick={() => handleSpanClick("yaxshi")}>Лучщие предложение</span>
            </div>

            <ul className="product__list">
                {products.slice(0, num).map(d => (
                    <li className="product__list-item" key={d.id}>
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
                    setNum(num + 16);
                    setProducts(Data.slice(0, num));
                }
            }}>
            Покозать еще
            <KeyboardArrowDownSharp />
            </button>
    </div>
  );
}

export default Product;
